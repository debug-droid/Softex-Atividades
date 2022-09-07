
public class ComputerFactoryApp {

	public static void main(String[] args) {
		
		Server server = ComputerFactory.createComputer();
		System.out.println(server);
		
		Pc pc = ComputerFactory.createrComputer();
		System.out.println(pc);

	}

}
