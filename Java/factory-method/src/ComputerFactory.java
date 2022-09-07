public class ComputerFactory implements iComputer {

	public static Server createComputer() {
		return new Server("8192", "1 Tb", "3.90Ghz", "server");
	}
	
	public static Pc createrComputer() {
		return new Pc("4096", "500Gb", "3.50Ghz", "pc");
	}
	
}