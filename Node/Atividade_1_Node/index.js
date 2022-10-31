/* Começando utilizando o comando 'npm init -y' com isso será criado um arquivo 
package.json contendo todas as informações do projeto de uma forma padrão.
*/

/* Posteriormente será necessário usar alguns pacotes, e para poder usar pacotes no projeto
é usado o comando 'npm install nome_do_pacote', através desse comando será baixado um framework, 
ou outra ferramenta, o arquivo package.json será atualizado com o nome do pacote baixado dentro 
do campo 'Dependencies', tornando possível o uso do pacote.
*/  

// importanto o express para o projeto
import express from 'express';

// criando uma constante que contém o express
const app = express();