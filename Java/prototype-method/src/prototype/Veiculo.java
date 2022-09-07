package prototype;

public abstract class Veiculo {
	
	String modelo;
	String marca;
	String cor;
	int numeroRodas;

	public Veiculo(String modelo, String marca, String cor, int numeroRodas) {
		this.modelo = modelo;
		this.marca = marca;
		this.cor = cor;
		this.numeroRodas = numeroRodas;
	}
	
	public Carro Clones() {
		return null;
				
	}
	
	public Caminhao Clone() {
		return null;
				
	}
	
	public void represent() {
		
	}

}