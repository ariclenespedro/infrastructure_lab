const School = require("../models/School");

const school = {
  create: async (req, res) => {
    try {
      const {
        designation,
        location,
        email,
      } = req.body;

      if (!designation) {
        return res.status(422).json({ message: "O nome da designação da escola é obrigatorio!" });
      }

      if (!email) {
        return res.status(422).json({ message: "O email da escola é obrigatório!" });
      }
      const newSchool = new School({
        designation,
        location,
        email,
      });

   
      await newSchool.save();

      res.status(201).json({
        message: "Conta bancária aberta com sucesso",
        account: newAccount,
      });
    } catch (error) {
      console.error("Erro ao abrir conta bancária:", error);
      res.status(500).json({ message: "Erro ao abrir conta bancária" });
    }
  },
  /* getDataAccount: async (req, res, next) => {
    // Pegue o ID do cliente da URL
    const clientId = req.params.clientId;

    // Use a função findOne() para encontrar a conta com base no ID do cliente
    Account.findOne({ client_id: clientId })
      .then((account) => {
        if (account) {
          // Se a conta for encontrada, você pode acessar os dados da conta aqui
          res.status(200).json(account);
        } else {
          // Se a conta não for encontrada, retorne um status 404 e uma mensagem indicando isso
          res.status(404).json({
            message: "Conta não encontrada para o cliente com ID fornecido",
          });
        }
      })
      .catch((error) => {
        // Se ocorrer algum erro ao buscar a conta, retorne um status 500 e uma mensagem de erro
        res
          .status(500)
          .json({ message: "Erro ao buscar dados da conta", error: error });
      });
  }, */
};

module.exports = school;