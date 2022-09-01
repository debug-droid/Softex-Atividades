
public class ComputerFactoryApp {

	public static void main(String[] args) {
		
		Pc pc = ComputerFactory.createComputer();
		System.out.println(pc);
		
		Server server = ComputerFactory.createComputer();
		System.out.println(server);

	}

}
