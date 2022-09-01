public class ComputerFactory implements iComputer {
	
	public static void createComputer(String ram, String hdd, String cpu, String type) {
		if(type == "pc") {
			Pc pc = new Pc("4096", "500Gb", "3.50Ghz", "pc");
			System.out.println(pc);
		} else {
			Server server = new Server("8192", "1 Tb", "3.90Ghz", "server");
			System.out.println(server);
		}
	}
	
}