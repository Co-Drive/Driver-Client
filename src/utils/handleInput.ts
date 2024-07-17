export const handleInput = (
  e: React.FormEvent<HTMLInputElement>,
  category: string
) => {
  switch (category) {
    case 'title':
      e.currentTarget.value = e.currentTarget.value.slice(0, 21);
      break;

    case 'num':
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
      break;

    case 'nickname':
      e.currentTarget.value = e.currentTarget.value
        .replace(
          /[^ㄱ-ㅎ가-힣a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]:;"'<>,.?|\/\\ ]/g,
          ''
        )
        .replace(/\s+/g, '')
        .slice(0, 11);
      break;
    case 'github':
      e.currentTarget.value = e.currentTarget.value
        .replace(/[^a-zA-Z0-9_-]/g, '')
        .slice(0, 39);
      break;
    case 'password':
      e.currentTarget.value = e.currentTarget.value
        .replace(
          /[^ㄱ-ㅎ가-힣a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]:;"'<>,.?|\/\\\s]/g,
          ''
        )
        .slice(0, 21);
      break;
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
