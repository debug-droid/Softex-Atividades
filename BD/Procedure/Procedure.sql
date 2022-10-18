DELIMITER $$

CREATE PROCEDURE verCompra (varProduto INT) 
SELECT CONCAT('A quantidade é: ', qtdProduto) AS QUANTIDADE
FROM TBL_PRODUTOS
WHERE ID_PRODUTO = varProduto;
END $$
DELIMITER;

CALL verCompra(1);