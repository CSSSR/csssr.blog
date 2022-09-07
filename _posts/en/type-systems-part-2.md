---
title: 'Comparison of <i>Type Systems</i> in Front-end Languages: Algebraic data types'
coverImageAlt: 'Type Systems'
author: 'Mikhail Medvedev'
date: '2022-09-07T05:35:07.322Z'
tag: 'web-development'
---

---

**W**e've already come across such types as `string` or `number`. They are called primitive. These types describe the simplest units of data available in our language. But how do we describe the things listed below?

* Value which can be of different types
* Some sequence of values (lists or tuples, for example)
* Structures like javascript objects or maps (key-value pairs)

This is where algebraic data types (ADTs) come in. These types are created by a combination of primitive or other algebraic types. In terms of the type system, all types that aren't primitive appear as algebraic. Two common classes of algebraic types are product types (a product, also known as a tuple, or a record, which is just a special case of a record) and sum types (disjointed or disjunctive unions, variant-type.) So, the type algebra is about creating some composite types based on a more primitive one with the help of allowed operators.

We are going to use some speculative metaphor and say that sum and product types (especially in presence of subtyping relations) are a very close equivalent to the sum and product from set theory. Here is some explanation for those who are not familiar with set theory. If we have some finite set of values, for example `a = [1, 2, 3]` and `b = [4, 5, 6]`, than Sum(a, b) will be `c = Sum(a, b) = [1, 2, 3, 4, 5, 6]` (which is also called a union), where the value of type `c` can be any of the given ones. The product is a Casterian product, which means that for our `a` and `b`, `c = Product(a, b) = [[1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6]],` so the values of the type `c` can be any of the given pairs. Looking ahead, `|` operators in TypeScript let us make unions, and both ReasonML and PureScript only allow us to make disjoint (or tagged) unions which differ from simple unions in a way that they save information about which set the given element appeared in the sum from.

All the languages mentioned in our article have good support for ADTs.

##**Union (Sum) Types**

What are the practical cases for these typing capabilities? Let's assume you have some collection like

```TypeScript
const collection = ["a", 10, { flag: true }];
```

in JavaScript code, which is not statically typed. If you would like to iterate through such an array, you should probably put some checks manually before starting to work with the value. Also, you won’t be prompted if, for example, you forget to check for one of the variants of the value in the collection.

For example, disjointed unions are useful when used alongside pattern matching. In languages with a more powerful support for pattern matching, you can put type constructors as patterns. Pattern matching gives us the following benefits:

1. Completeness check. The compiler can give you a warning/error if you have not handled all the pattern variants for which the expression might fit. In the case of disjointed unions, you should explicitly handle all the types included in the union or add a default case.
2. Extraction of a concrete value type from the union. In our example, after matching, we can work with an explored value like it has an exact type.

We can make a union type in TypeScript for the previous example:

```TypeScript
type CollectionItem = string | number | { flag: boolean };

const collection: CollectionItem[] = ['a', 10, {flag: true}]
```

And with that typing, when we access a collection of items with iteration or by index (which is a trickier thing to do), to work with that value as an item of the exact type, we should remove ambiguity by checking, for example, that `typeof collection[index] === 'string'`. Only after such a check, the type system would allow you to pass that value where `string` type is expected. Such checks are still runtime, but the type checker forces you to put such checks in your code.

Also, if the structure of a collection is always the same as in the example, it could be typed as a tuple

```TypeScript
type Collection = [string, number, { flag: boolean }];

const collection: Collection = ['a', 10, { flag: true }];
```

In that case, we can create arrays of type `Collection` only with the exact order of values (the string value goes first, then a number, and the last one is { flag: boolean }) that need to be exactly the same size. When accessed by index, it will check that the accessed index is not out of bounds, and the type of access value will be inferred without ambiguity. On the other side, if you try to iterate over an array of this type, you'll get the same result as in the previous example — the type of variable will be `string | number | { flag: boolean };` and you will have the same capabilities as in the case of manually defined union. What is more, TypeScript enables you to use `switch/case` as a very poor variant of pattern matching. With its help, we can also remove ambiguity (sadly, for a union of some different record types, you have to add some field that will work as a tag to imitate pattern matching on them)

Variant types are analogs of unions in ReasonML and PureScript. They are close to TypeScript (but closer to the PureScript ones) but different in the following way: you should always define tags (constructors) for each item included into a variant, you can't reuse the already created variant, they involve nominative typing (where TypeScript unions are pure structural). Untagged unions are not allowed, and if you can read them as **some value of type C can have features of type B or type A with type C = A | B syntax** in TypeScript, in ReasonML and PureScript they read as **some value that can be created by one of the constructors from target type**. This is because structural typing is not present in the variants.

So the definition of our previous `CollectionItem` type will look like this:

```TypeScript
type flagged = {
  flag: bool
};

type collectionItem = Numeric(int) | String(string) | Rec({flag: true})

type collection = array(collectionItem)

let coll: collection = [|Numeric(10), String("Hello"), Rec({flag: true})|]
```

Then we can process its items like this:

```TypeScript
let o = coll[0]

let a = switch(o) {
  | String(s) => true
  | Numeric(x) => false
  | Rec(r) => r.flag
}
```

This is what pattern matching looks like in ReasonML. We match values with tags defined at their type. We can also extract values under those tags. If we forget to handle one or more possible cases in a variant type, the compiler will notify us with a warning.

Defining tuples is the same as in TypeScript:

```TypeScript
type collection = (int, string, flagged)

let coll: collection = (10, "hello", { flag: false })
```

The difference lies in the usage — in TypeScript, you continue to work with it as with a limited version of an array. It's different for ReasonML. For example, you can access its items only by destructuring or pattern matching. In both cases, the runtime representation will still be a JavaScript array.

Lastly, here is what our example may look like in PureScript:

```TypeScript
data CollectionItem = Numeric Int | Stringy String | Flaggy { flag :: Boolean }

items :: Array CollectionItem
items = [Numeric 10, Stringy "Hello", Flaggy { flag: false }]

processItem :: CollectionItem -> String
processItem (Numeric a) = "Hello"
processItem (Stringy b) = "World"
processItem (Flaggy f) = "Boolean here"
```

Same thing here — you can only make tagged unions, but it allows inline records, as TypeScript does. The syntax for pattern matching differs as follows: it looks like three separate function realizations. A type checker will force you to cover all cases on the union, but instead of a warning, you'll catch an error if you haven’t covered all variants.

```TypeScript
itemsT :: CollTuple
itemsT = Tuple 10 "Hello" { flag: false }
```

Tuples are defined like this, they are not much different from ReasonML. They do not provide you with array capabilities as TypeScript does. For more information on them, check the PureScript documentation.


###**Product Types**

We've already used some product types in previous examples . We can create records with braces syntax (like `{ flag :: Boolean }`). As we said before, they are just some cases of tuples, but their elements can be accessed via some tag or a key. Tuples are created with square brackets syntax in TypeScript, round brackets in ReasonML, and just by listing items separated by a space.

In general, product types open up an opportunity for us to create complex structures.


###**Note on TypeScript Simulatiting Pattern Matching in TypeScript**

We have shown some examples of pattern matching in PureScript and ReasonML. Here is an example of how we can simulate it in TypeScript using [discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions).

```TypeScript
type A = {
    __TAG__: 'A';
    value: string;
}

type B = {
    __TAG__: 'B';
    value: number;
}

type C = A | B;

function foo(param: C) {
    switch(param.__TAG__) {
        case 'A': {
            param.value.toLocaleLowerCase();
        }
        case 'B': {
            param.value.toString();
        }
    }
}
```

[Online compiler if you want to play around](https://www.typescriptlang.org/play?#code/C4TwDgpgBAglC8UDeAoK6oH1MBUYHFsAuKAchlIG40MA3AQwBsBXCEgZ2ACcBLAOwDm1AL4oUoSFABCCZDXTY8hTCVJSq8qAxZsofZgFsARhC4ixE6AGFZcAD7TqKAGbM+AY2A8A9nyjPvbwAKMHouegMSKwBKOQwodgB3HmB3AAsQsIiAOkUCbFjUePj3enZoclISIuLa0PCDbO1WbOBvABlvUsYITsTTKzKIIOjqWvRRcahS8rJ1as0p+pzmiFbvAGVufgERsfHJjFFhIA)

##**TypeScript ADTs**

Here is a set of examples of different ADTs in TypeScript. TypeScript allows you to create intersection types. In set theory, intersections operate like logic `and` — if you have two sets, the intersection between them will only contain elements that belong to both sets. In TypeScript, an intersection operator `&` makes a new type by merging all fields of the two types. ReasonML and PureScript don’t have this operation. Practically, intersections in TypeScript combine all properties from two types into a new type. It's like combining two interfaces via the `extend` keyword. The intersection is useless for primitive types (including literal types) as that will lead to `unknown` or to a type that is impossible to create. For example, `type NumberString = number & string` is `unknown`, same for `type OneAndTwo = 1 & 2`, as there is no value that is string and number (belongs to both sets at one time) or value that is both numbers one and two at the same time.

But if we create some union with common properties from literals, their intersection will not be empty: `type Two = (1 | 2) & (2 | 3)` will be literal type `2`.

```TypeScript
type A = {
    field1: string;
}

type B = {
    field2: string;
}

type intersection = A & B;

type union = A | B;

type tuple = [A, B];

const intersectionValue: intersection = {
    field1: 'Hello',
    field2: 'World',
}

const unionValue1: union = intersectionValue;

unionValue1.field1; // not allowed because at this place you don't know what part of union your value belongs to

const unionValue2: union = {
    field1: "Hello",
}

const unionValue3: union = {
    field2: "World",
}

const unionValue4: union = {}

const tupleValue: tuple = [{ field1: "Hello" }, { field2: "World" }];
const tupleValue2: tuple = [{ field1: "Hello" }, { field2: "World" }, { field2: "World" }];
```

[Here](https://www.typescriptlang.org/play?ssl=35&ssc=92&pln=1&pc=1#code/C4TwDgpgBAglC8UDeAoK6oDMCWEA2AJgIwBcUAzsAE7YB2A5gNwoC+KKokUAQgsmhhz4CAJjKUaDZmw7hodYBCrkIAY2DYA9rT5wAZD2ayuAV1padiOAB9D7TtGAmweaIgDaMADQ8AukdVtSigFJRV1CwA1AEM8EwgyUOU1DW0+VAwsXEJSKAByAAl8PE08rwF0IUIxfIB1TSpCMtZ2QNpgsyjY+NzOtMQk8NTaGLiIIz6R7ogiADoq4kYoAHplqFpNYChYkoB3CAIoACM1aJMVba3gAAtscigXaNVoEE0TKAJtPK2Aaw3dqC7a7RLZgaJULaaTBQSZQV4mKhQABu02O+G09HuwE0rSCW0mo3iNVhiAygmyxDIACIingSlTyjI2h1zNpCRAAMxkEn8TILGpU+qNAgMlooZn41lTMYAFm5UvSTLxUCcLgg7LIqtcfHcSCywlyNOKmipUBYPj1-OpQsIppY-nFyq16umNWdOstFMNtPpZot+uq1oatr9yADoiDwrt-iAA) you can check how the compiler will or won't allow you something based on the composite types you create.

Also, TypeScript's special types `never` and `unknown` have some interesting capabilities related to union and intersection. Again, if we refer to set theory, `unknown` will behave like a set that contains all other values and will be the supertype for all other types. And `never` is a set which contains no values, or an `empty set`. So in case of respective operations, they work as identity elements (an identity element is an element that leaves the second element unchanged when being used in some binary operation):

```TypeScript
type A<T> = T | never // == T
type B<U> = U & unknown // == U
```

If you check the [online compiler](https://www.typescriptlang.org/play?#code/C4TwDgpgBAggPAFQHxQLxQVAPlAdhANwgCcAoUSKAITgFUV1aoAyKAV1wGtcB7Ad1xA), you'll see that `A&<T> = T` and `B<U> = U` — the operation is simplified to `T` and `U` with identity elements removed from it, as in these cases, they don't bring any useful type information. And if we change the operators, we get the opposite:

```TypeScript
type A<T> = T & never
type B<U> = U | unknown
```

`A<T> = never` and `B<U> = unknown` - [no information on T and U saved](https://www.typescriptlang.org/play?#code/C4TwDgpgBAggPAFQHxQLxQVAZFAdhANwgCcAoUSKAITgFUV1aoAfKAV1wGtcB7Ad1xA).

##**Interaction of Subtyping and Type Algebra**

Such behavior can be easily described using set theory. Let's start with `never`. A union of two sets is a set where each element belongs to one of the parent sets or to both at once. So `unknown` is the set of all possible values, a union with it will always be the same set, as any value belongs at least to unknown, practically losing all useful information about the more restrictive one. This happens because, as you might have noticed, in values typed as a union of some types, you can access the only intersection of its properties (fields), and property `containing all the possible values` does not intersect with any other one. There is a good example of that behavior in the TypeScript documentation:

It might be confusing that a union of types appears to have the intersection of those types’ properties. This is not an accident — the name union comes from type theory. The union number | string is composed by taking the union of the values from each type. Notice that given two sets with corresponding facts about each set, only the intersection of those facts applies to the union of the sets themselves. For example, if we had a room of tall people wearing hats, and another room of Spanish speakers wearing hats, after combining those rooms, the only thing we know about every person is that they must be wearing a hat.

An opposite effect is observed for intersection with `unknown` — as it is the set of all values that belong to both parent sets, an intersection of any type with `unknown` is like an intersection of some set with the set of all values, thus only values from the more restrictive one go into the resulting set.

Now let's get to `never` and the empty set. A union of some non-empty set `A` with an empty set will always result in a set that is equivalent to `A`, as there is nothing to take from the empty one. An intersection will always result in the empty set itself, as there is no value that can satisfy the rule to be in both sets at once (if it could, the empty set would not really be empty.) So `never` behaves exactly the same way as the empty set when combined with other types.

There is also a more general rule (it also works for the TypeScript types): an intersection of a subset and a superset always consumes a supertype, and a union of such types always consumes a subtype. And here is the last thing: an intersection of two sets creates a subset of both (it is valid for the TypeScript types) and a union of two sets creates a superset of both sets (it is also valid for types.)

```TypeScript
type A = { field1: string }

type B = { field2: string }

type AB = A & B

function expectA(val: A) {
    return val
}

function expectB(val: B) {
    return val
}

const aB: AB = {
    field1: "Hello",
    field2: "World",
}

expectA(aB)
expectB(aB)
```

With some type `A` and its supertype `B`, we are allowed to pass `A`, where `B` is expected. So the example above underlies this rule and shows us that an intersection is a subtype of other types.

If we change `type AB = A & B` to `type AB = A | B`, checks won't pass anymore as a type `AB` will become a supertype of `A` and `B`. Here is a [Playground if you want to check yourself](https://www.typescriptlang.org/play?#code/C4TwDgpgBAglC8UDeUBmBLCAbAJgRgC4oBnYAJ3QDsBzKAXwCgHRIoAhBZNTXAJiNIUa9Ji2gwOiOADJ2TVAFdKAY2DoA9pSgQAHpFUwAFADcAhliIwAlMgZR7UMhGAKyWs1gaMGilWs3aehCqbCbmRGw2SHYOTi5uUB5eTMqapFCmbJaStg7c2PhEAEQAEthY6kUANDH2GAX8UEUA6upkuNXJDLr6wEaZVt1BIYYDQA).

These rules show us the relation between the TypeScript type system and set theory. They also show us that type algebra operation relates to subtyping as well (we'll have a more precise look at it in the next chapter) and ADT's are in a sub/supertype relation with their parent types.

As we said before, neither PureScript nor ReasonML allows such intersection syntax.

##**ReasonML Variants (Sum Types)**

ReasonML also has a unique feature among the languages we have mentioned. This feature is polymorphic variants. These variants differ from the normal ones a lot:

* The constructors are global and exist on their own (one can use them even without a definition.)
* There is an ability to extend such variants.
* There are type constraints instead of a concrete type.

Let's take an example:

```TypeScript
type alignment = [`Good | `Neutral | `Evil];

type reversedAlignment = [`Evil | `Good | `Neutral]

let id = (value: alignment) => value;

let x: reversedAlignment = `Evil

id(x)

let x2 = `Good

id(x2)

type withAdditional = [alignment | `Additional]

let x3: withAdditional = `Evil

let idLower = (value: [> alignment]) => value;

idLower(x3)
```

Types `alignment` and `reversedAlignment` show how you can define a polymorphic variant. For example, we are passing the value of type `reversedAlignment` into `id` functions that wait for the value of the `alignment` type, but we won't get an error (you can check the [online compiler](https://reasonml.github.io/en/try?rrjsx=true&reason=C4TwDgpgBAhgNgSwOYDsC2EXCgXigbQAMBxAe1IBMoAfKQgOQgFdgAneGugUQDcE4AugG4AUCNCQorCDwisAzhAoBBRKgxZcBQr36cS5KrQbM28AWLgRsCKngAUPeEwgAuWGvSZgASlwA+KCc4F1ERK2wAD3dpWQUlVWQvTTwdPjgxW3tInyA)), which won't be true for normal variants — with them, we would only be able to pass an exact value type. That's because the polymorphic variants only let you pass the value of any type that has the same constructors (not more, not less, exactly the same). The next part of the example with `x2` works because ReasonML didn't infer an exact type for it. Instead, it infers a type constraint `[> Good ]` which is a so-called lower bound that means all the types that have at least the constructor `Good`. Passing `x3` to `id` will result in an error because, as we have said before, we need the same constructors. But if we change the signature for the value to be a constraint, that will mean that we need a type with at least all the needed constructors.

Here is another thing about polymorphic variants constraints: there is a hidden type parameter. If you try to

```TypeScript
type good = [> `Good]
```

You'll get an error:

```TypeScript
A type variable is unbound in this type declaration.
In type [> `Good ] as 'a the variable 'a is unbound
```

It can be fixed by an explicit definition of a type parameter with a constraint:

```TypeScript
type good('a) = [> `Good] as 'a
```

and a computed type would be

```TypeScript
type good('a) = 'a constraint 'a = [> `Good ];
```

Such definition with the polymorphic parameter will cause some discomfort when using — you'll need to provide some type in place of `a` when using it in definitions (this is a basic parametric polymorphism rule for ReasonML, we'll talk about it in the next chapter)

```TypeScript
type alignment = [`Good | `Neutral | `Evil];

type onlyEvil = [`Evil];

type good('a) = [> `Good] as 'a

let x = `Good

let process = (value: good(alignment)) => value

process(x)
```

[Here](https://reasonml.github.io/en/try?rrjsx=true&reason=C4TwDgpgBJBODOB7AdlAvFA3gKClZAhgLYQBcU8wsAlsgOYA0uUBdZUtwTAvgNzbZQkGBGDoszQiXKUa9JnlbtOCqIgDuyCLHJwkyHv0HhoYtMwA+UAEIAKPSgCUlqABF7ox0YA2oqACtEaAwAZUQSWztMKXYAIgApINiGFjZyACYABm5HL2xfMX9qIiIQcTCIqJjyBOLS5NT2LJy8-L82YAA5YmCoWwAPckQwYGoUW2Bc9AA+CTx4dWpgAGMACz7+xzm8HasKiEjbaJ6axIgGpRaZqASk5h2oPfCD90wNLVgrtFn37QA6GL3XZQAD611iABZ0rFsABIbjYPgCeLwP7eRB0WwdboRQIQXL8FFojFY0Q4g5FEogAnYIA) you can check some more patterns that we can match in ReasonML.

###**Some More Examples in ReasonML**

```TypeScript
type person = {
  name: string,
  age: int,
};

type pet = {
  name: string,
  age: int,
  owner: person,
};

type t =
  | B(person)
  | D(pet);

let joe = Some(B({name: "Joe", age: 20}));
let jimmy = Some(B({name: "Jimmy", age: 20}));

let getName = (x: option(t)) => {
  switch (x) {
      | Some(B({name: "Joe", age})) => "Joe"
      | Some(D({owner})) => owner.name
      | _ => "42"
  }
};

Js.log(getName(joe));
Js.log(getName(jimmy));
```

##**PureScript**

Here are some examples of PureScript ADTs:

```TypeScript
module Main where

import Prelude

import Effect.Console (logShow)
import TryPureScript (render, withConsole)

data Animal = Monkey Legs | Dog Legs | Spider Legs -- ADT

data Legs = Legs Int

myPet :: Animal
myPet = Monkey (Legs 2)

myPet2 = Monkey (Legs 4)

myPet3 = Dog

myPet4 = Legs 8

myPet5 = myPet3 (Legs 2)

-- showsAnimal :: Animal -> String -- Compile error: not all cases covered
-- showsAnimal (Monkey a) = "Animal is Monkey, it has " <> show a

showsLegs :: Legs -> String
showsLegs (Legs a) = show a <> " legs"

main = render =<< withConsole do
  logShow $ showsLegs(myPet4)
```

Also, we can define any kind of tuples, for our previous example we could do

```TypeScript
data Tuple a b = Tuple a b
pets = Tuple myPet myPet2
```

and a type class to be able to logShow them

```TypeScript
instance showTuple :: (Show a, Show b) => Show (Tuple a b) where
  show (Tuple a b) = "(Tuple " <> show a <> " " <> show b <> ")"
```

and that would work. But if you'd like to do `pets = Tuple myPet myPet2 myPet2`, the compiler will notify you of an error instead of inferring 3 items tuple type.

In this example of PureScript code, you can check different things (types inferred for variables, uncomment `showsAnimal)` and see the type checker reporting an error because you haven’t covered all cases of the pattern).

If you fix `showsAnimal` to make it cover the whole pattern

```TypeScript
showsAnimal :: Animal -> String -- Compile error: not all cases covered
showsAnimal (Monkey a) = "Animal is Monkey, it has " <> show a
showsAnimal (Dog a) = "Animal is Dog, it has " <> show a
showsAnimal (Spider a) = "Animal is Spider, it has " <> show a
```

You may see that there is another error — `No type class instance was found for Data.Show.Show Legs`. Type classes are another feature of PureScript which we will cover in the next chapter of this article.

If you want to check what it looks like, you can add the following lines to the previous code:

```TypeScript
instance showLegs :: Show Legs where
  show = showsLegs

instance showAnimal :: Show Animal where
  show (Monkey a) = "Animal is Monkey, it has " <> show a
  show (Dog a) = "Animal is Dog, it has " <> show a
  show (Spider a) = "Animal is Spider, it has " <> show a
```

also, you can remove the `showsAnimal` definition and replace `main` with

```TypeScript
main = render =<< withConsole do
  logShow $ myPet5
```

where `myPet5` can be replaced with an Animal instance of your choice.

As you can see, all the three languages have support for ADT's and some kind of pattern matching (with TypeScript having a very poor variant with `switch`). Some have more flexibility at the creation stage, others let you do some cool stuff at the pattern matching stage.

Another kind of ADT is the recursive type. Their use cases look obvious — values with recursive structure.

```TypeScript
// TypeScript
const empty = Symbol('empty');

type Empty = typeof empty;

type Tree<T> = Empty | [Tree<T>, T, Tree<T>]
// ReasonML
type tree('a) = Branch(tree('a), 'a, tree('a)) | Empty

// PureScript
data Tree a = Empty | Branch (Tree a) a (Tree a)
```

Playgrounds: [ReasonML](https://reasonml.github.io/en/try?rrjsx=true&reason=C4TwDgpgBMBOEQBQHICGBKKBeKAhWqAdgMYAWicCKGANFGnZUmupgD5QCiAtmKAFBA), [TypeScript](https://www.typescriptlang.org/play?#code/MYewdgzgLgBApgWwA5QJ4wLwwMqoQIxABsAKAckRVTIEoBuAKAbSThgFFk1MYW4QAZvC6pGzVKxgAVAE5w4AHikA+HpyowAPjADas+UuUAaaSf2KVAXSahIsBKnMAuaXMVgArgTgzVWHZRoJgCMAAwmOgEiJgBMAKwmgaiWIcGJIpbWQA)

##**Some Conclusions**

ADT is a powerful tool that allows you to create complex types by using the primitive ones or the types that were created with the help of algebra — so you can create something more complex by reusing the one you have already created with a simple set of operators. We can make it even more reusable by combining ADTs and polymorphism.
