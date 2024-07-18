export const handleInput = (
  e: React.FormEvent<HTMLInputElement>,
  category: string
) => {
  switch (category) {
    // 타입 제한 X, 21자 제한
    case 'title':
      e.currentTarget.value = e.currentTarget.value.slice(0, 21);
      break;

    // 숫자만 가능
    case 'num':
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '').slice(0, 3);
      break;

    // 한글, 영어, 일반적인 특수문자 가능, 공백 불가능, 11자 제한
    case 'nickname':
      e.currentTarget.value = e.currentTarget.value
        .replace(
          /[^ㄱ-ㅎ가-힣a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]:;"'<>,.?|\/\\ ]/g,
          ''
        )
        .replace(/\s+/g, '')
        .slice(0, 11);
      break;

    // -, 영어 가능, 공백 불가능, 39자 제한(깃허브 유저네임 조건에 맞춤)
    case 'github':
      e.currentTarget.value = e.currentTarget.value
        .replace(/[^a-zA-Z0-9-]/g, '')
        .replace(/\s+/g, '')
        .slice(0, 39);
      break;

    // 한글, 영어, 일반적인 특수문자, 공백 가능, 21자 제한
    case 'password':
      e.currentTarget.value = e.currentTarget.value
        .replace(
          /[^ㄱ-ㅎ가-힣a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]:;"'<>,.?|\/\\\s]/g,
          ''
        )
        .slice(0, 21);
      break;

    // 한글, 영어, 일반적인 특수문자, 공백 가능, 21자 제한
    case 'secretKey':
      e.currentTarget.value = e.currentTarget.value
        .replace(
          /[^ㄱ-ㅎ가-힣a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]:;"'<>,.?|\/\\\s]/g,
          ''
        )
        .slice(0, 21);
      break;

    default:
      return e.currentTarget.value;
  }
};
