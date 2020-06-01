class Data {
  private static winner: string;
  private static answer: string;
  public static setWinner(id: string) {
    Data.winner = id;
  }
  public static setAnswer(str: string) {
    Data.answer = str;
  }
  public static getAnswer() {
    return Data.answer;
  }
  public static getWinner() {
    return Data.winner;
  }
}
