export class Regex {
  public static fullName = /^[a-zA-ZəöğıçşüƏÖĞIÇŞÜ0-9_\s]{3,15}$/;
  public static password =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  public static phone = /^0(50|51|55|70|77)(\s?\d{3}\s?\d{2}\s?\d{2})$/;
}
