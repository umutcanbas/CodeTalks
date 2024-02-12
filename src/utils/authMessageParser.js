export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-mail adresi';

    case 'auth/email-already-exists':
      return 'E-mail adresi kullanımda';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';

      case 'auth/weak-password':
      return 'Zayıf şifre';

    default:
      return errorCode;
  }
}
