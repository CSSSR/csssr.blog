---
title: 'Comparison of <i>Type Systems</i> in Front-end Languages'
coverImageAlt: 'Type Systems'
date: '2021-10-10T05:35:07.322Z'
tag: 'web-development'
---

---

## Introduction

**W**ith the stable growth of web projects, developers have found that they need some tools that will make maintaining and writing new code easier. There are various ways to help you to verify and validate code such as tests, contracts, typing, etc. We are going to focus on type systems in different static typing languages useful in web development centering on comparison by a couple of parameters.

We are not going to look for winners or losers because decisions taken on the type systems in languages we are going to discuss didn’t come from scratch. If we were going to rate any of these languages objectively, we would need to take into account the whole ecosystem of language, history, advantages, and limitations that appeared in languages because of their design.

## Parameters for Comparison

1. How easily/elegantly different concepts can be expressed with the type system of a chosen language. Elegance is a subjective case, so we handle it this way — if something needs more movement, it means that this case is less elegant in this language.
2. Support of different features of static typing. Pattern matching, type algebra, type inference, etc. are examples.
3. If there are any places in the language where the type system doesn’t give us any guarantees of soundness/unsoundness. Soundness is an analyzer’s ability to prove the absence of errors. If a program is accepted by an analyzer, then the program is guaranteed not to go out of the bounds we put on it with the help of types. For example, if we are going to read or write to some file, we can easily get an error in runtime and if the type system allows encoding of such cases and forces a programmer to put checks on them, we can be ready for such errors. So a sound type system gives us a guarantee that we cover all cases predicted by our types. It is important to note that type systems can not prove the correctness of programs generally. Some of them are powerful enough to use automatic theorems proving and in a certain range can prove correctness.

I’d encourage the reader to be distrustful but not paranoid when someone pledges that type system of language X is sound, but it depends on the kind of software you are working with. Even if it is implementing a type system in which soundness is proven, there is always some space for poor implementations, bugs in the type checker/compiler, etc.

## Type System and Type Inference

Type inference is the ability of a language compiler to infer expression type with the help of some rules.

Let’s look at it from a historical perspective. We can begin with [lambda calculus](http://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/tutorials/lambda.pdf), which is a formal system for expressing computations based on functions and it’s equivalent to a Turing machine. It consists of a single transformation rule, which is variable substitution — β-conversion and a single function definition scheme. The central concept of lambda calculus are expressions that can be defined recursively as

```jsx
  <expression> := <name>|<function>|<application>
  <function> := λ <name> . <expression>
  <application> := <expression><expression>
```

This means that there are only two operators (keywords) in it, which are — `λ` and the dot.

As a deep dive into `lambda calculus` is not part of this article, there is a multitude of information about it that can be found. The next step will be [simply typed lambda calculus](https://www.cs.bham.ac.uk/~udr/popl/04-19-TLC.pdf), which is the simplest typed interpretation of lambda calculus.

In simply typed lambda calculus, we explicitly state what type of argument there is. There is no space for polymorphism in simply typed lambda calculus, so more complex type systems that allow it appeared later.

Two commonly known systems formalize the notion of parametric polymorphism: `System F` and `Hindley-Milner type system`. The most valuable difference between them in the context of this article is type inference, which is generally undecidable in System F and decidable in the Hindley-Milner type system.

This difference comes from the next fact, which is that in System F, polymorphism is explicit, can occur [anywhere](https://babel.ls.fi.upm.es/~pablo/Papers/Notes/f-fw.pdf), and is impredicative, but in the HM type system, it is implicit, can occur only on the top [level](https://homepages.inf.ed.ac.uk/wadler/papers/papers-we-love/milner-type-polymorphism.pdf), and is predicative. So you can consider the Hindley-Milner system as a kind of restriction for System F, which would allow you more flexibility with types, but it also requires more type annotations.

Valuable property, that comes from limitation on polymorphism in Hindley-Milner types system, is decidable type inference. In opposite in System F it is proven to be generally [undecidable](https://dl.acm.org/doi/10.5555/859871) i.e type checking is proven to be undecidable in System F without type annotations and that is equivalent to undecidable type inference.

We need some examples here, but I’ll show them a bit later.

Another result of the difference between System F and Hindley-Milner is that polymorphism is first-class in System F and it is not in the Hindley-Milner system.

If we look at a parametrically polymorphic type like a function, it takes some type and returns another one. Which property functions in some languages should have to allow us to make higher-order functions? They should be first-class citizens and we need the ability to save them into variables, to pass them into another function, and to return from functions.
In general, we need the ability to manipulate them as other ’data’ values. The same goes for polymorphic types. When we need some forms of abstraction, we may need higher-rank types, something like the polymorphic type that takes another mono or polymorphic type and returns another polymorphic type. This feature is disabled in the Hindley-Milner types system.

Let’s look at some examples to get a closer touch with it. They include parametric polymorphism, which we’ll discuss in later parts of this article:

```TypeScript
type Id<A> = (val: A) => A
```

The previous example shows us the definition of a generic (polymorphic) function type. We introduce parameter `A` and say that it is any function that takes a value of `A` and returns a value of `A` too.

```TypeScript
type Id<A> = (val: A) => A

const id: Id = val => val

function applyId(id: Id) {
  return [id(10), id("Hello")]
}
```

In that TypeScript example, we’ll get an error saying that we can’t use generic type as is, and we have to pass type argument into it.

If we try to make another type parameter for `applyId` it won’t work (a least when we define it at the top level):

```TypeScript
function applyId<T>(id: Id<T>) {
  return [id(10), id("Hello")]
}
```

You’ll get: [error](https://www.typescriptlang.org/play?jsx=0&ssl=5&ssc=2&pln=3&pc=1#code/C4TwDgpgBAkgJgHgIID4oF4oAoBuBDAGwC4okBKDNJAKGoDMBXAOwGNgBLAeyajzDAIh4CACoos7OCVyESIiujTyoAb2pQoAJwjAGmngG1JWAIwAGMgBooxgEQAJCAQKdbZALrUAvkA) as you can instantiate `applyId` with type other than `number` or `string`, at the same time its signature is compatible with `id` function. For real, there are two options in TypeScript to pass function type as a generic one (usage of `typeof`).

All the previous examples show us how polymorphism can be limited in the Hindley-Milner type system with polymorphic parameters only at the top level, which is practically making only rank-1 polymorphism possible.

Impredicative instantiation is impossible in TypeScript, as we have seen that usage of type parameters forces you to make it monomorphic when used. We can consider impredicative instantiation like higher-order operations, but at type level if we could use generic in such a way that we can pass generic into and get another generic as output.

```TypeScript
const id: Id = val => val

function applyId(id: Id) {
  return [id(10), id("Hello")]
}
```

If we could somehow instantiate `Id` to be polymorphic, it would be an example of impredicative instantiation.

We can handle limitations if we rewrite `type Id` as a call signature of an object literal type.

```TypeScript
type Id = {
    <T>(val: T): T
}

const id: Id = val => val

function useId(id: Id) {
    return [id(10), id("Hello")]
}
```

Or `type Id = <T>(val: T) => T`

Or even inline needed type

```TypeScript
const id: <T>(val: T) => T = val => val

function useId(id: <T>(val: T) => T) {
    return [id(10), id("Hello")]
}
```

Both introduce higher rank polymorphism (in this case rank-2) to us. You might notice that from the definition of `Id` type, the definition of type parameter moved from top level and same for inline example. As we don’t have polymorphic parameters at the top level, we don’t have to ’reduce’ it to monotype.

```TypeScript
type IdOuter<T> = {
    (val: T): T
}

const idOuter: IdOuter = val => val
```

`IdOuter` definition is equal to `type Id<A> = (val: A) => A` and as before it won’t allow you to create values before you provide it with some.

These examples don’t introduce impredicative instantiation as there are no manipulations with type. We just say that there will be something polymorphic and don’t make any additional transformations.

Also, such definitions will block us from the ability to pass non-polymorphic functions.

If we do,

```TypeScript
const idNumber = (val: number) => val

function useIdNumber(id: Id) {
    return [id(10)]
}

const result2 = useIdNumber(idNumber)
```

we’ll get an error saying.

```TypeScript
  Type ’T’ is not assignable to type ’number’
```

Even if we change to

```TypeScript
function useIdNumber(id: Id, val: number) {
    return [id(val)]
}
```

we defined that parameter `id` should be polymorphic and it can’t be any monomorphic function because it will be possible for such a function to do some logic based on knowledge of that monomorphic type, but we should be able to pass anything there.

For example, with the `id` function defined as `val: T => T` we have no information about the type and the only possible realization of `id` is to return the parameter as is. On the other hand, for functions like `val: number => number` you can do anything that is allowed to do with numbers.

The last example is

```TypeScript
type Id = {
    <T>(val: T): T
}

const id: Id = val => val

function useId<U, P>(id: Id, a: U, b: P) {
    return [id(a), id(b)]
}
```

which shows us that we can make it with any values and not just number or string and also show why there should not be the possibility to pass non-polymorphic function in place of `id`. If we could do so and pass any type for `a` and `b` type safety would be lost.

Now for ReasonML

```ReasonML
let id = x => x
let applyId = id => (id(13), id("Hello"))
```

Here, we’ll get an error saying that incorrect type inferred for the second call of id (wanted int, but get string). This is because the type of polymorphic `id` in context of being parameter of `applyId` inferred to a monomorphic one (based of the first usage in body of `applyId`, type of `id` ’reduced’ to `int -> int`).

```ReasonML
let applyId = (id('a): 'a => 'a) => (id(13), id("Hello"))
```

We could imagine syntax similar to the above example, but it’s not allowed to introduce new type variables like this. We can only help the type system to deduce the desired type by annotating with a concrete type like.

```ReasonML
  let applyId = (id: string => string) => [id(13), id("Hello")]
```

Even if we separate the applyId type definition and its realization, we would not be able to properly type it without providing argument type to it.

```ReasonML
type applyId('a) = ('a => 'a) => (int, string)
let apply: applyId = id => (id(10), id("Hello"))
```

The example above will tell you that.

```ReasonML
  The type constructor applyId expects 1 argument(s)
```

We’ve seen that already for TypeScript examples such as type parameter `’a` introduced at the top level and should be ’reduced’ to monotype when used. We can’t express in ReasonML that the parameter of `applyId` must be a polymorphic function.

Without annotations, the same inference rules will work in PureScript:

```PureScript
import Data.Tuple

identity id = id

useIdentity id = Tuple (id 10) (id "Hello")
```

By default, PureScript can’t infer the correct type for `useIdentity`, as it goes beyond Hindley-Milner features. But in PureScript, we are also allowed to annotate `useIdentity` parameter as polymorphic

```PureScript
import Data.Tuple

identity id = id

useIdentity :: (forall a.  a -> a) -> Tuple Int String
useIdentity id = Tuple (id 10) (id "Hello")
```

We specified monomorphic return types that exactly match our realisation, but for real we can do something like

```PureScript
  useIdentity :: forall b c. b -> c -> (forall a. a -> a) -> Tuple b c
```

and

```PureScript
  useIdentity x y id = Tuple (id x) (id y)
```

and that will be fine. After all, we can use it like.

```PureScript
  x = useIdentity 10 "Hello " identity
```

In TypeScript, we can also write it as

```PureScript
useIdentity :: forall b c. b -> c -> (forall a.  a -> a) -> Tuple b c
useIdentity x y id = Tuple (id x) (id y)
```

or as

```PureScript
useIdentity :: (forall a.  a -> a) -> forall b c. b -> c -> Tuple b c
useIdentity id x y = Tuple (id x) (id y)
```

Both forms are the same rank, as it doesn’t base on which side of the arrow polymorphic parameters occurred. The `forall b c.` part can be moved to the beginning of definition and the result will be the same.

A `Hindley-Milner` type system with extensions is the basis for both PureScript and ReasonML type systems, so they can use its inference algorithm (also with extensions if needed), called `Damas-Milner algorithm W`.

A simple description of the algorithm is that it puts a limitation on a type being inferred until it has available information. The most common type will be inferred. This feature is inherent in the languages of the ML family. For cases that are complicated enough, algorithms won’t be able to infer accurate type if we didn’t explicitly put type on parts of an inspected expression.

To achieve automatic type inference, Hindley-Milner type system restricts polymorphism where function arguments and elements of structures can only be monomorphic.

A hard description is long enough to take its article and involves the reader to at least have some knowledge of symbolic logic. You can check it here for example [here](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.18.9348&rep=rep1&type=pdf)

Let’s look at a simple inference example:

```PureScript
iAmANumber =
  let square x = x * x
  in square 42.0
```

or Inference example for ReasonML:

```ReasonML
type a = {
  f1: string,
  f2: string,
}

let x = {
  f1: "Hello",
  f2: "World"
}
```

We can think about expressions like these as the simplest case of type inference.

Let’s look at the simple example of inference in TypeScript.

```TypeScript
const inferred = "Hello world"; // Infers literal type 'Hello world' for variable 'inferred'.
const inferred2 = SomeObject.someMethod(); // Infers 'inferred2' type based on return type of someMethod.
```

Examples of such simple cases may look strange, but some time ago in old versions of popular languages, we didn’t have such abilities and it led to redundant verbosity, especially in the case of generics. In actual versions, we can tell the compiler that it should infer the variable type based on the right part of an expression.

Such languages are, for example, Java where you had to write constructions like:

```Java
ArrayList<String> myArrayList = new ArrayList<String>();
```

where the variable `list` has the type of `ArrayList<String>` and after we repeatedly write `ArrayList<String>` to create an instance. The ability to remove such duplication was only added in 2018 in Java 10 by adding local type inference with the `var` keyword, so you can now write:

```Java
var myArrayList = new ArrayList<String>();
```

There is the same story with C#, which syntax is very similar to Java’s, but features for local inference with `var` keyword were added earlier, in 2007 with C# 3.0.

But enough off topic discussion, let’s return to our languages.

PureScript is not strictly based on some type system. Instead, it is inspired by some research as its author [mentioned](https://stackoverflow.com/a/29440717). As a result, there is no proof of its soundness, and its type system is a mix of ideas from some research. As one of them is [HMF](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/hmf.pdf), here and throughout the article we’ll use HMF as is because there is no expanded name in research which is an extension of Hindley-Milner type inference with first-class polymorphism. So, it allows explicit polymorphism, effectively taking features of System F. HMF uses `Damas-Milner algorithm W` with small extensions.

Valuable properties of HMF:

**1.** HMF is a conservative extension in that every program that is well-typed in Hindley-Milner, is also a well-typed HMF program, and type annotations are never required for such programs. For example, in Standart ML, you can write an identity function as `fun id x = x` and its type will be `val id = fn : ’a -> ’a`, which is the same as we have in PureScript for such function.

Therefore, if we transfer a program with definitions like `fun id x = x` (and replace some syntax constructions if needed) into language that uses HMF, that program will be typed without any additional annotations and will pass type checking.

**2.** In practice, few type annotations are needed for programs that go beyond Hindley-Milner. Only polymorphic parameters and ambiguous impredicative instantiations must be annotated. Both cases can be specified and are relatively easy to apply in practice.

This point comes first from any program that is well-typed in Hindley-Milner, which may have no annotations at all, and it will be well-typed in HMF without changes except some may be syntax-specific and necessity in annotations would break that. We’ve already seen examples where type annotations are needed and where not. Some more examples:

```PureScript
import Data.Tuple
import Data.Int
identity id = id

intToString = toStringAs decimal

useIdentity id x y = Tuple (id x) (id y)

a = useIdentity intToString 10 10
b = useIdentity identity 10 10
```

All definitions above don’t require any annotations because, but different type will be inferred for useIdentity

```PureScript
forall a b. (a -> b) -> a -> a -> Tuple b b
```

which will make usage like `c = useIdentity identity 10 "Hello"` impossible again.

**3.** The type inference algorithm is very close to algorithm W. It does not require unfamiliar operations, which makes it relatively easy to understand and implement. I'd recommend you to check the difference in the [paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/hmf.pdf).

Valuable property: HMF will never infer polymorphic types for parameters automatically (what we’ve seen in the previous point) and whenever there is an ambiguous impredicative application, HMF always prefers the predicative instantiation and always introduces the least inner polymorphism possible. Being compatible with Hindley-Milner, it will infer the same types as Hindley-Milner would do, so if you want to introduce impredicativity in such cases, you need to annotate that explicitly.

HMF extends Hindley-Milner with regular System F types where polymorphic values are first-class citizens. To support first-class polymorphism, two ingredients are needed: higher-rank types and impredicative instantiation.

With higher-rank types, we’ve already gotten acquainted while talking about the difference between System F and Hindley-Milner systems. To generalize: without support for higher-rank types only definitions can be polymorphic while parameters can not (this is what you could see with `id` function examples before).

```PureScript
useIdentity :: forall a. (a -> a) -> Tuple Int String // Rank-1
useIdentity :: (forall a.  a -> a) -> Tuple Int String // Rank-2
```

Without support for higher-rank types, universal quantifiers (forall) can appear only at the top level and can’t be nested.

Impredicative polymorphism allows you to instantiate type variables with not only monomorphic types but with polymorphic types and even self-references (this is why it’s called impredicative). Impredicative polymorphism takes the idea of higher-rank types to its natural conclusion — universal quantifiers allowed anywhere in a type.

Higher-rank types always involve some limited form of impredicative polymorphism (where impredicativity only allows for `->` constructor).

Example of predicative instantiation

```PureScript
data SomeType a = SomeType a

someValue :: SomeType Int
someValue = SomeType 10
```

Impredicative instantiation

```PureScript
data SomeType a = SomeType a
data SomeOtherType a = SomeOtherType a

someValue :: SomeType SomeOtherType
someValue = SomeType
```

Here you’ll get an error "Could not match kind `Type -> Type` with kind `Type`", which means that you can’t pass polymorphic type as a parameter of another polymorphic type (you should get another polymorphic type as a result of such operation).

In reality, even though HMF proposes the usage of impredicative instantiation, PureScript does not fully implement it. Here is an example of HMF paper that won’t work:

```PureScript
id x = x
poly (f :: forall a. a -> a) = Tuple (f 1) (f true)

apply f x = f x

someVal = apply poly id
```

You’ll get an error saying.

```PureScript
The type variable a has escaped its scope
```

You can check some more info about impredicative polymorphism [here](https://gitlab.haskell.org/ghc/ghc/-/wikis/impredicative-polymorphism). It is the documentation for Haskell. However, it gives a good and simple description of the topic.

TypeScript is using the [structural type system](https://en.wikipedia.org/wiki/Structural_type_system) and has its own set of rules to infer types. In structural type systems, equivalence and compatibility of types are defined by structure, compared to nominative systems, where those properties are defined by types names.

Supertype/subtype relations in such systems are defined by structure too so in TypeScript some type `A` is considered as a supertype of `B` if `B` has at least all fields defined in `A` with the same types. There are some design decisions in TypeScript based on its structural nature. For example, if you define `id` function like in ReasonML or PureScript

```TypeScript
const id = val => val
```

its type won’t be inferred to a type with variable. Instead, it infers `any` for the parameter `val`. TypeScript parametric polymorphism starts to work only when it is explicitly stated somewhere, so in the example above parameter `val` got `any` type and all type information will be lost after you apply such `id` function to any value, as return type will be `any` too (inferred by the fact that you return `val` and it has type `any`).

It is a superpowered type in TypeScript — it is assignable to any other type and vice versa. You can access any fields of `any` and type checking will always pass. When you are using `any`, the statically typed world is left behind and to get back to it you can apply type assertion (operator [as](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)) to get some new type.

TypeScript won’t check that you are doing fine with that, so it is good practice to check that a value typed as `any` can be properly used as the value of target type. There is a mechanism called [type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) to help you with that. There is a close, but safer one in TypeScript — [unknown](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type). So if `any` is about ’everything available here’, `unknown` is about ’everything available here, but you can do nothing with that’ because `unknown` is too general.

```TypeScript
function whatToDoWithUnknown(item: unknown) {
    // You can do nothing with unknown here. Only type narrowing can help you to make something useful
    return item
}

function whatToDoWithAny(item: any) {
    // No rules zone
    console.log(item.field1)
    const b = item.field2 + item.field3.field5
    // etc.
    return b
}

const a = 10

whatToDoWithAny(a)
whatToDoWithUnknown(a)
```

Example of type narrowing with type predicates

```TypeScript
const a: any = 10

const isNumber = (val: any): val is number => {
    return typeof val === 'number'
}

if (isNumber(a)) {
    // a has 'number' type in this context
}
```

Or

```TypeScript
type A = {
  field1: string
}

type B = {
  field2: string
}

const a = {
  field1: "Hello",
  field2: "World"
}

const isA = (val: unknown): val is A => {
    return typeof val === 'object' && val !== null && 'id' in val
}

const workWithB = (val: B) => {
  console.log(val.field2)
  // console.log(val.field1) - error
  if (isA(val)) {
    console.log(val.field1)
    console.log(val.field2)
  }
}
```

Therefore, as with `any`, you can pass anything where `unknown` type is expected, but after there is nothing to do with that value, it can be converted to ’useful’ type only by narrowing or assertion.

In presence of subtyping, `unknown` is the supertype for everything (as everything can be passed where `unknown` is expected and `unknown` itself can’t be used anywhere), when with `any` that rule works vice versa so `unknown` is more type-safe feature.

There is also an opposite to `unknown` - [never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never). Never is a subtype for everything so no values of other types can be passed where `never` expected, so practically you can’t directly create values of `never` type.

There are no such special types in PureScript and ReasonML, so TypeScript has some more presence of set theory and its types, including the set that contains all possible values and empty set into its type system (and some operations with them will work exactly like on sets in set theory, we’ll look at them in the next chapter).

```TypeScript
type AUnion = unknown | string
type AIntersection = unknown & string

type BUnion = never | string
type BIntersection = never & string
```

You can check types from the example above at [playgroud](https://www.typescriptlang.org/play) — they will behave as if you operate with sets.

This is intuitive for structural type systems to be more related to set theory than nominative ones (where PureScript and ReasonML are both mostly nominative). For example, in set theory, some set `A` will be a subset of some set `B` if all values from `A` are also included in `B`, with no respect to names of that sets or ways of creation for these set — only fact of containing same values generates subset-superset relations (or equivalency).

Additionally, that is close to what we said about structural type systems — subtype/supertype relations based only on structure, not names. If we consider structure as a set of possible values of that type, that relation to set theory becomes more clear.

```TypeScript
type A = {
    field1: string
}

type B = {
    field1: string
    field2: string
}

const processA = (val: A) => {
    console.log(val)
}

const b: B = {
    field1: "Hello",
    field2: "World",
}

processA(b)
```

The simple example above shows how subtyping relations appear in TypeScript — `B` is considered a subtype of `A` because there is `field1: string` in `B` and by its structure it can be used anywhere, where `A` is expected.

In the next examples, we can see that there are cases where TypeScript can’t infer types in cases where ReasonML and PureScript can do it. On the other side type inference in TypeScript evolves and one of the fresher features — the ability to infer types of class fields based on types of constructor [parameters](https://www.TypeScriptlang.org/docs/handbook/release-notes/TypeScript-4-0.html#class-property-inference-from-constructors).

[Online compiler with next example](https://www.TypeScriptlang.org/play?#code/GYVwdgxgLglg9mABMGAnAzlAFAQwFyJggC2ARgKaoA0ipBRZlAlIgN4BQiXiq5UIqJDkQBqWgG52AX3btQkWAkTpyEBABNcNUiw7cefAUhQZsObU0kz2KtWE0ByHA5oPSDpkA) compared to ReasonML/PureScript, where the correct type of function will be inferred based on its parameters used in the body

```TypeScript
function first(a: number, b: number) {
    return a + b;
}

function second(a, b) {
    return first(a, b);
}

second('a', 'b')
```

In the example above, TypeScript does not infer types for `second(a, b)` params. They will be any without declarations and type safety will be ruined.

```ReasonML
let add = (x, y) => {
  x + y
}

let someF = (x, y) => add(x, y)

let x = someF(1, 1)
```

```PureScript
add a b = a + b

someF a b = add a b

x = someF 1 2
```

PureScript and ReasonML on the other side infer the most general type available for whole code from the examples above. The type will include some polymorphic variables (type parameters) and for variable `x` concrete type (int) will be inferred based on usage of polymorphic functions with literals.

As we said before, the inference is decidable in the Hindley-Milner types system and that is its notable property — the ability to infer the most general type of the program without any hints (like type annotations). This is its very important difference from System F, so by implementing features basic for System F, the inference may appear not available without hints when that features are used, as they are the reason why the inference is undecidable for System F.

We have already seen examples of undecidable inference, once again

```PureScript
useIdentity :: (forall a.  a -> a) -> Tuple Int String
useIdentity id = Tuple (id 10) (id "Hello")
```

Here we have to annotate the type for `useIdentity` because HMF won’t infer that for you and `id` will be a monomorphic one.

[In official documentation](https://www.typescriptlang.org/docs/handbook/type-inference.html) you can read about TypeScript inference.

Also, it would be remiss not to mention TypeScript’s [literal types](https://www.TypeScriptlang.org/docs/handbook/literal-types.html).

```TypeScript
type OneTwoThree = 1 | 2 | 3
type OnlyA = 'A'

const b: OnlyA = 'B' // error
```

This feature does not exist in the other languages we are talking about. When you are using a union of literal types, it becomes pretty close to using enums/variants. You can use `switch` like a very poor version of pattern matching to properly work with concrete values and it also opens you opportunities to interop with something typed as `string` or `number`, but if you know that there is a pool of concrete values that should go in, you can type check it at a higher level and still pass your value into for example your literal type `type a = ’A’` is a subtype of string.

Also, returning to one of the previous examples with `id`

```TypeScript
let values = [id(10), id("Hello")] as const
```

We can apply [as const](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) assertion and many different type will be inferred for us. Without it, we had `(string | number)[]` and with it, we get `[10, ’Hello’]` tuple, and literals didn’t get widened to their supertypes (number and string). This is another example where literal types can do their job.

ReqasonML is a dialect of OCaml which is based on an extension of Standart ML, which in its turn uses the Hindley-Milner system — [ML<sup>F</sup>](http://www.cs.nott.ac.uk/~pszgmh/appsem-papers/lebotlan.pdf).

ML<sup>F</sup> differs from Hindley-Milner in a close way to how HMF differs from it. The main idea of ML<sup>F</sup> is to add support for first-class polymorphism into the Hindley-Milner system.

Valuable properties of ML<sup>F</sup> to note:

**1.** ML<sup>F</sup> is more powerful than HMF, so any well-typed HMF program is also a well-typed ML<sup>F</sup> program. The logic here is the same as in HMF to the Hindley-Milner system. For example, if we have some PureScript code

```PureScript
useIdentity :: (forall a.  a -> a) -> Tuple Int String
```

and somehow translate it to languages based on ML<sup>F</sup>, we’ll get a well-typed program.

**2.** ML<sup>F</sup> goes beyond regular System F types which makes ML<sup>F</sup> considerably more complicated. This is the case for programmers that have to understand these types and meta-theory of ML<sup>F</sup>, the implementation of type inference algorithm, and the translation to System F (which is important for qualified types).

If compared to HMF, implementation in some languages should be less complex (in theory). I don’t think there are any simple examples to show such complexity.

**3.** ML<sup>F</sup> does not require annotations for ambiguous impredicative applications. For example in PureScript

```PureScript
  single item = [item]
  id x = x

  singleId = single id
```

`singleId` will have type `forall a. Array a -> a`. However, it could also be typed as `Array (forall a. a -> a)` and HMF in such a case prefers the type which the Hindley-Milner system would prefer. If you want type `Array (forall a. a -> a)` for `singleId` you can annotate it like.

```PureScript
  singleId = (single :: (forall a. a -> a) -> Array (forall a. a -> a)) id
```

ML<sup>F</sup> on its side will infer more types without annotations and try to decide such ambiguity in favor of a more general type.

There is also differences in type inference between ML and ReasonML (OCaml) in general:

1. ML adds a condition into the Hindley-Milner system for generalization (one of the typing rules in Hindley-Milner), which is the so-called value restriction: the type of some variable is generalized only if it has no visible side-effect. ReasonML relaxes the value restriction.
2. It avoids a scan of the type environment by implementing a level-based generalization algorithm, which is inspired by region-based memory management.

There is [good description](http://okmij.org/ftp/ML/generalization.html) of how OCaml’s type checker works.

HMF ideas are close to ML<sup>F</sup>’s one and they both have the same pitfall — a programmer is required to make type annotations for cases of such polymorphism. Consequently, it is still leaving the program fully inferable when first-class polymorphism didn’t get used because type inference is still undecidable for it.

Neither are silver bullets. They are just tools that may be helpful if you need that higher level of abstraction and if you are ready for trade offs.

There is not much sense and it’s very hard or impossible to show examples for all cases of type inference, but it’s important to understand that this instrument allows, with help of a type-checker, us to write more expressive and less verbose code but to stay within the framework of static typing.

In conclusion, I can say that in TypeScript there are many more limitations on which things will be inferred for you, such as being structurally typed and allowing explicit forms of polymorphism by design that leaves much more freedom on what different expressions can mean in terms of typing. ReasonML and PureScript have very close inferring capabilities, and both have some features that ruin the ability to infer without additional annotations.

## Soundness

TypeScript allows some unsound behavior on purpose. You can check it out at [TypeScript notes about it](https://www.TypeScriptlang.org/docs/handbook/type-compatibility.html). Also, if you want to take a look at roots of type inference in TypeScript, you can check [TypeScript spec](https://github.com/microsoft/TypeScript/tree/master/doc), but beware that it’s outdated [archived and not supported anymore](https://github.com/microsoft/TypeScript/issues/15711).

Some examples from TypeScript doc:

```TypeScript
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error
```

This one allows you to set the value of a variable to a function with fewer parameters than expected by that variable type

It will work even with custom types

```TypeScript
let processEntity = (a: MyType, b: MyType2) => 0;

let processEntity2 = (c: MyType) => 0;

processEntity = processEntity2

processEntity2 = processEntity // error
```

However, it won’t work if you change the type of parameter `c` to `MyType2`. Parameters should follow the same order, here TypeScript won’t allow you to make something unexpected.

TypeScript documentation gives a good description of why such behavior allowed

> You may be wondering why we allow ‘discarding’ parameters like in the example y = x. The reason for this assignment to be allowed is that ignoring extra function parameters is quite common in JavaScript. For example, Array#forEach provides three parameters to the callback function: the array element, its index, and the containing array.

Another example from TypeScript docs:

```TypeScript
enum EventType {
  Mouse,
  Keyboard,
}
interface Event {
  timestamp: number;
}
interface MyMouseEvent extends Event {
  x: number;
  y: number;
}
interface MyKeyEvent extends Event {
  keyCode: number;
}
function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) =>
  console.log((e as MyMouseEvent).x + "," + (e as MyMouseEvent).y)
);
listenEvent(EventType.Mouse, ((e: MyMouseEvent) =>
  console.log(e.x + "," + e.y)) as (e: Event) => void);
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));
```

That behavior can be disabled with the `strictFunctionTypes` compiler option. Why is it considered unsound? If we remove a connection to `Event` for a simpler example

```TypeScript
enum EventType {
  Mouse,
  Keyboard,
}
interface E {
  timestamp: number;
}
interface MyMouseEvent extends E {
  x: number;
  y: number;
}
interface MyKeyEvent extends E {
  keyCode: number;
}
function listenEvent(eventType: EventType, handler: (n: E) => void) {
  if (eventType === EventType.Keyboard) {
      handler({timestamp: 123})
  }
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: E) =>
  console.log((e as MyMouseEvent).x + "," + (e as MyMouseEvent).y)
);
listenEvent(EventType.Mouse, ((e: MyMouseEvent) =>
  console.log(e.x + "," + e.y)) as (e: E) => void);
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));
```

Therefore, you can see it yourself as in the example above we expect `x` and `y` in

```PureScript
  listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));
```

but realisation can provide less data and we’ll get runtime error.

Another place for unsoundness is optional and the rest parameters

```TypeScript
function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));
```

Here, unsound behavior is almost the same as the previous one in that realization of invokeLater could provide any number of arguments, but we are not forced to rely on that. Instead, we can pass a function that expects 3 params or 4 or 100 and it will pass type check, but all of those parameters may be undefined.

The last thing to note is array and object index access in TypeScript. By default, it is not checked and situations, where you can get undefined, pass type checking.

```TypeScript
const a = [1,2,3]

const b = a[42]
```

Type of `b` will be inferred to `number`. You can turn on the `noUncheckedIndexedAccess` flag to force TypeScript to add undefined to item type when you access it by index.

Being based on ML<sup>F</sup> which is [sound](http://cambium.inria.fr/~remy/work/mlf/icfp.pdf), doesn’t make ReasonML fully sound in practice.

Here are some examples of unsound behavior in OCaml [here](https://github.com/ocaml/ocaml/issues/6744) and [here](https://github.com/ocaml/ocaml/issues/7241). According to this fact, we can consider that ReasonML as being the dialect of OCaml may have unsound behavior too.

[Here](http://okmij.org/ftp/ML/generalization.html) you can read more about it.

Example of almost the same code as we used in TypeScript’s.

You can see that ReasonML can [properly infer types](https://ReasonML.github.io/en/try?rrjsx=true&reason=DYUwLgBAZglgTgZ0gXggCgB4BoIE8CUEyAfBBhANR4DcAUKJAiAMYD2AdgCZHoCGOAI0Ilo8JGn4QhtJmy5oA5LwU4FAhfmpA). Also, there is [more complex case on ReasonML](https://ReasonML.github.io/en/try?rrjsx=true&reason=C4TwDgpgBJBODOB7AdlAvFA3gKCleAlgF4QBcUBywANLlAIYDmZFVtAvgNzbaiRSJgACwiwACqKSoMOPMnoBbFvGCxKjDjwA2EYAy0EAxtBl1CJcgEYADLTxMWAFgBMHbgHoAVFABCIAcjQAGYEEFoAJqxBklDC9HoARogJ+EKIAK4RUAnQcFKx4ND0yJEEelr0hgDW8FAA5A51UCFhkZ7u2DqJyehYZsQsNm7aulAgiFqIvbJQ8krkAEQAjgDuEAvD2F5QAJLI0QgF-EGIsDD0sIr1YE0J-sX0WiBE6lArQkZCzaERtWsMsCKhmM8EIyEYrEI4WC6WQhmABBQ2UQ4X87U6o3g6QUYl6YHQAD4+ngwAA6czQADUMFJDmw7BGenovSxOIAFI8jBAAJQYxIs7FiNnjSbcoA)

I didn’t find issues that mention unsoundness in PureScript, but there is no proof that it is fully sound.
