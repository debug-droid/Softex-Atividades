
public class Pc implements iComputer {

	public String ram;
	public String hdd;
	public String cpu;
	public String type;
	
	public Pc (String ram, String hdd, String cpu, String type) {
		this.ram = ram;
		this.hdd = hdd;
		this.cpu = cpu;
		this.type = type;
	}


	public String getRam() {
		return ram;
	}


	public String getHdd() {
		return hdd;
	}


	public String getCpu() {
		return cpu;
	}


	public String getType() {
		return type;
	}
	
	@Override
	public String toString() {
		return this.type + " com " + this.ram + " GB de memória " + this.hdd + " GB de HD, e processador com " + this.cpu + " de velocidade.";
	}

}
