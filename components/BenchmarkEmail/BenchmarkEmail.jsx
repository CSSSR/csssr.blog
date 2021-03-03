import styled from '@emotion/styled'
import styles from './BenchmarkEmail.styles'
import { Heading, SubHeading } from '@csssr/core-design'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import TextField from './TextField'

const BenchmarkEmail = ({ className }) => {
  const isWindowContext = typeof window !== 'undefined'

  function rmspaces(x) {
    var leftx = 0;
    var rightx = x.length - 1;
    while (x.charAt(leftx) == ' ') {
      leftx++;
    }
    while (x.charAt(rightx) == ' ') {
      --rightx;
    }
    var q = x.substr(leftx, rightx - leftx + 1);
    if ((leftx == x.length) && (rightx == -1)) {
      q = '';
    }
    return (q);
  }
  function checkfield(data) {
    if (rmspaces(data) == "") {
      return false;
    } else {
      return true;
    }
  }
  function isemail(data) {
    var flag = false;
    if (data.indexOf("@", 0) == -1 || data.indexOf("\\", 0) != -1 || data.indexOf("/", 0) != -1 || !checkfield(data) || data.indexOf(".", 0) == -1 || data.indexOf("@") == 0 || data.lastIndexOf(".") < data.lastIndexOf("@") || data.lastIndexOf(".") == (data.length - 1) || data.lastIndexOf("@") != data.indexOf("@") || data.indexOf(",", 0) != -1 || data.indexOf(":", 0) != -1 || data.indexOf(";", 0) != -1) {
      return flag;
    } else {
      var temp = rmspaces(data);
      if (temp.indexOf(' ', 0) != -1) {
        flag = true;
      }
      var e2 = temp.length - temp.lastIndexOf('.') - 1;
      var i1 = temp.indexOf('@');
      if ((temp.charAt(i1 + 1) == '.') || (e2 < 1)) {
        flag = true;
      }
      return !flag;
    }
  }

  function submit_LY6HHClick() {
    var retVal = true;
    var frm = isWindowContext && document.getElementById("formbox_screen_subscribe_LY6HH");
    if (!isemail(isWindowContext && document.getElementsByName("fldemail_LY6HH")[0].value)) {
      alert("Please enter the Email Address");
      isWindowContext && document.getElementsByName("fldemail_LY6HH")[0].classList.add('error')
      retVal = false;
    }
    if (retVal == true) {
      frm = "_LY6HH";
      var f = isWindowContext && document.createElement("form");
      f.setAttribute('accept-charset', "UTF-8");
      f.setAttribute('method', "post");
      f.setAttribute('action', "https://lb.benchmarkemail.com//code/lbform");
      var elms = isWindowContext && document.getElementsByName("frmLB" + frm)[0].getElementsByTagName("*");
      var ty = "";
      for (var ei = 0; ei < elms.length; ei++) {
        ty = elms[ei].type;
        if (ty == "hidden" || ty == "text" || (ty == "checkbox" && elms[ei].checked) || (ty == "radio" && elms[ei].checked) || ty == "textarea" || ty == "select-one" || ty == "button") {
          var elm = elms[ei];
          if (elm.id != "") {
            var i = document.createElement("input");
            i.type = "hidden";
            i.name = elm.name.replace("_LY6HH", "");
            i.id = elm.id;
            i.value = elm.value;
            f.appendChild(i);
          }
        }
      }
      isWindowContext && document.getElementsByTagName('body')[0].appendChild(f);
      f.submit();
    }
    if (isemail(isWindowContext && document.getElementById("fldemail_LY6HH").value) && window && window.JB_TRACKER && typeof window.JB_TRACKER.jbSubmitForm === 'function') {
      window.JB_TRACKER.jbSubmitForm({
        name: isWindowContext && document.getElementById("fldname_LY6HH").value,
        email: isWindowContext && document.getElementById("fldemail_LY6HH").value,
        didSubmit: true
      });
    }

    return retVal;
  }

  function debounce_LY6HH(func, wait, immediate) {
    var timeout;

    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  var hasVerticalCenter_LY6HH = isWindowContext && document.getElementsByClassName('position-centered');
  function verticalCenter_LY6HH(element) {
    if (element) {
      element.style.opacity = 0;
      element.style.display = 'block';
    }
    setTimeout(function () {
      if (hasVerticalCenter_LY6HH.length > 0) {
        var windowHeight = Math.max(isWindowContext && document.documentElement.clientHeight, window.innerHeight || 0);
        var formElement_LY6HH = isWindowContext && document.getElementsByClassName('formbox-editor_LY6HH')[0];
        var formHeight_LY6HH = formElement_LY6HH.clientHeight;
        if (formHeight_LY6HH < windowHeight) {
          var newPosition = 0;
          newPosition = (windowHeight - formHeight_LY6HH) / 2;
          formElement_LY6HH.style.top = newPosition + 'px';
        } else {
          formElement_LY6HH.style.top = '0px';
        }
      }
      if (element) {
        element.style.opacity = 1;
      }
    }, 100);
  }

  if (hasVerticalCenter_LY6HH.length > 0) {
    var resizeEvent_LY6HH = debounce_LY6HH(function () {
      verticalCenter_LY6HH();
    }, 250);
    window.addEventListener('resize', resizeEvent_LY6HH);
  }
  return (
    <section className={className}>
      <div className="container">
        <Heading.H1
          type="regular"
          size="l"
          className="heading"
          dangerouslySetInnerHTML={{ __html: 'Подпишитесь на ежемесячную рассылку<br class="break" /> CSSSR' }}
        />
        <SubHeading
          type="regular"
          className="sub-heading"
          dangerouslySetInnerHTML={{ __html: 'Свежие статьи, подкасты, новости <span style="white-space: nowrap">веб-разработки</span>, вакансии и интересные события. Никакого спама. Только по делу.' }}
        />

        <div className="form">
          <div id="signupFormContainer_LY6HH">
            <div id="signupFormContent_LY6HH">
              <div className="formbox-editor_LY6HH">
                <div id="formbox_screen_subscribe_LY6HH" name="frmLB_LY6HH">
                  <input type="hidden" name="token_LY6HH" id="token_LY6HH" value="mFcQnoBFKMSzsmu7q30mJlcgGr0xQgnhYKvwyt2w%2FlUo8Ib%2FRjCiPA%3D%3D" />
                  <input type="hidden" name="successurl_LY6HH" id="successurl_LY6HH" value="http://lb.benchmarkemail.com//Code/ThankYouOptin?&language=" />
                  <input type="hidden" name="errorurl_LY6HH" id="errorurl_LY6HH" value="http://lb.benchmarkemail.com//Code/Error" />
                  <fieldset className="formbox-field_LY6HH fieldset">
                    <TextField id="fldname_LY6HH" name="fldname_LY6HH" label="имя пользователя" testId="BenchmarkEmail:field.name" />
                    <TextField id="fldemail_LY6HH" name="fldemail_LY6HH" label="e-mail" testId="BenchmarkEmail:field.email" />
                  </fieldset>
                  <fieldset className="fieldset">
                    <div
                      id="btnSubmit_LY6HH"
                      className="formbox-button_LY6HH"
                      onClick={submit_LY6HHClick}
                    >
                      Подписаться
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <PictureSmart
            className="picture"
            requireImages={require.context('../../public/components/benchmark/reader')}
            alt="Reader with newspaper"
          />

          <p
            className="policy"
            dangerouslySetInnerHTML={{
              __html: `Отправляя данную форму, я подтверждаю своё согласие на получение рекламных и информационных материалов, а также факт своего ознакомления и согласия с <a class="link" href="https://csssr.com/ru/privacy-policy" target="_blank">Политикой конфиденциальности<a/>`,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default styled(BenchmarkEmail)`
  ${styles}
`
