package prototype;

public class Carro extends Veiculo {

	public int numeroPortas;

	public Carro(String modelo, String marca, String cor, int numeroRodas, int numeroPortas) {
		super(modelo, marca, cor, numeroRodas);
		this.numeroPortas = numeroPortas;
	}

	public Carro Clones() {
		return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
	}
}