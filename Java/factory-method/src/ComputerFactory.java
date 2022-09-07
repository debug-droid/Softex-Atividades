public class ComputerFactory {

	public static iComputer createComputer(String ram, String hdd, String cpu, String type) throws Exception {
		
		switch (type) {
		case "pc":
			return new Pc(ram, hdd, cpu, type);
		case "server":
			return new Server(ram, hdd, cpu, type);
		default :
			throw new Exception("Tipo inválido.");
		}
		
	}
	
}