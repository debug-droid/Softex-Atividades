public class Concrete {
	
	private Strategy strategy;
	
	public Concrete(Strategy strategy) {
		this.strategy = strategy;
	}
	
	public int execute(int num1, int num2) {
		return strategy.Execute(num1, num2);
	}
}