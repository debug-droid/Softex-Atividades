public class Calculadora {

	public static void main(String[] args) {
		
		Concrete concrete = new Concrete(new Execute());
		System.out.println("5 + 5 = " + concrete.execute(5, 5));
		
		concrete = new Concrete(new Execute());
		System.out.println("5 - 5 = " + concrete.execute(5, 5));
		
		concrete = new Concrete(new Execute());
		System.out.println("5 * 5 = " + concrete.execute(5, 5));

	}

}