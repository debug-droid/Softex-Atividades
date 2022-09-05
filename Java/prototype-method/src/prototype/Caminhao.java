package prototype;

public class Caminhao extends Veiculo {
	
	public int pesoCarregavel;

	public Caminhao(String modelo, String marca, String cor, int numeroRodas, int pesoCarregavel) {
		super(modelo, marca, cor, numeroRodas);
		this.pesoCarregavel = pesoCarregavel;
	}

}
