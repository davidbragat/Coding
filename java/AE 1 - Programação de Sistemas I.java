import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    int total = 0;
    int input = 0;
    double area = 0;
    Scanner r = new Scanner(System.in);

    System.out.print("Informe o raio do perímetro: ");
    input = r.nextInt();

    area = (int) Math.PI * (input * input);

    if (area <= 1000) {
      total = 1;
    } else if (area > 1000 && area <= 10000) {
      total = 2;
    } else if (area > 10000 && area <= 100000) {
      total = 3;
    } else if (area > 100001) {
      total = 4;
    }

    r.close();

    System.out.println("Para a área de " + area + "m2 será necessário " + total + " salva-vida(s).");
  }
}