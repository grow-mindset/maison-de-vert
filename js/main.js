const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-navigation');
const navigationLinks = document.querySelectorAll('.main-navigation a');
const consultationForm = document.querySelector('.consultation-form');

function closeMenu() {
  if (!menuToggle || !navigation) return;

  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '메뉴 열기');
}

function toggleMenu() {
  if (!menuToggle || !navigation) return;

  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('is-open', !isOpen);
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
}

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', toggleMenu);

  navigationLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
  });
}

function setFieldError(field, message) {
  const errorElement = document.getElementById(field.getAttribute('aria-describedby')?.split(' ').at(-1));

  field.setAttribute('aria-invalid', 'true');
  if (errorElement) errorElement.textContent = message;
}

function clearFieldError(field) {
  const describedBy = field.getAttribute('aria-describedby');
  const errorId = describedBy?.split(' ').find((id) => id.endsWith('-error'));
  const errorElement = document.getElementById(errorId);

  field.removeAttribute('aria-invalid');
  if (errorElement) errorElement.textContent = '';
}

function validateField(field) {
  const value = field.type === 'checkbox' ? field.checked : field.value.trim();

  if (!value) {
    setFieldError(field, '필수 입력 항목입니다.');
    return false;
  }

  if (field.type === 'email' && !field.validity.valid) {
    setFieldError(field, '이메일 주소 형식으로 입력해 주세요.');
    return false;
  }

  clearFieldError(field);
  return true;
}

if (consultationForm) {
  const requiredFields = consultationForm.querySelectorAll('[required]');
  const formStatus = consultationForm.querySelector('.form-status');

  requiredFields.forEach((field) => {
    const eventName = field.type === 'checkbox' ? 'change' : 'input';

    field.addEventListener(eventName, () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });

  consultationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidField = [...requiredFields].find((field) => !validateField(field));

    if (invalidField) {
      if (formStatus) formStatus.textContent = '입력 내용을 확인해 주세요.';
      invalidField.focus();
      return;
    }

    if (formStatus) {
      formStatus.textContent = '입력 내용을 확인했습니다. 상담 접수 연결은 준비 중입니다.';
    }
  });
}
