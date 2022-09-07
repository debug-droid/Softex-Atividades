public class ComputerFactoryApp {

	public static void main(String[] args) throws Exception {
		
		iComputer server = ComputerFactory.createComputer("8", "1 TB", "3.90GHz", "server");
		System.out.println(server);
		
		iComputer pc = ComputerFactory.createComputer("4", "500", "3.50GHz", "pc");
		System.out.println(pc);

	}

}
