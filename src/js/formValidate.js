import { HINT_DFLT_MSG } from './constants';

export default function FormValidate() {
  const inputColl = document.querySelectorAll('input');

  const validate = (value) => ((value.trim() === '') ? { error: true, msg: HINT_DFLT_MSG } : false);

  const emailValidate = (value) => {
    const simpleValidate = validate(value);
    if (simpleValidate?.error) return simpleValidate;

    const emailPatter = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isValid = emailPatter.test(value.trim());
    const msg = 'Invalid email format';

    return {
      error: !isValid,
      msg,
    };
  };

  const createHint = (msg) => {
    const hint = document.createElement('div');
    hint.classList.add('form__hint');

    const hintIcon = document.createElement('span');
    hintIcon.className = 'flowIcon flowIcon_info';

    const hintMsg = document.createElement('span');
    hintMsg.classList.add('form__msg');
    hintMsg.textContent = msg;

    hint.appendChild(hintIcon);
    hint.appendChild(hintMsg);

    return hint;
  };

  const inputValidate = (type, value, field, submitBtn) => {
    const btn = submitBtn;

    const currHint = field.querySelector('.form__hint');

    let checkValid;

    switch (type) {
      case 'email':
        checkValid = emailValidate(value);
        break;

      default:
        checkValid = validate(value);
        break;
    }

    if (!checkValid?.error) {
      field.classList.remove('form__field_error');
      currHint?.remove();
      btn.removeAttribute('disabled');
      return;
    }

    const currMsg = field.querySelector('.form__msg')?.textContent;

    if (currHint && currMsg === checkValid.msg) return;

    field.classList.add('form__field_error');

    currHint?.remove();
    const hint = createHint(checkValid.msg || HINT_DFLT_MSG);
    field.appendChild(hint);

    btn.disabled = true;
  };

  inputColl.forEach((item) => {
    const input = item;
    const form = input.closest('.form');
    const field = form.querySelector('.form__field');
    const submitBtn = form.querySelector('button[type="submit"]');

    input.oninput = ({ target }) => inputValidate(target.type, target.value, field, submitBtn);
  });

  const formColl = document.querySelectorAll('form');

  formColl.forEach((item) => {
    const form = item;

    form.onsubmit = (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      let data = {};

      fd.forEach((value, name) => {
        const simpleValidate = validate(value);

        if (simpleValidate?.error) {
          const element = form.querySelector(`[name="${name}"]`);
          const field = element.closest('.form__field');
          const submitBtn = form.querySelector('button[type="submit"]');
          const { type } = form.elements[name];

          inputValidate(type, value, field, submitBtn);
          element.focus();
          return;
        }

        data = { ...data, [name]: value };
      });

      form.reset();
    };
  });
}
