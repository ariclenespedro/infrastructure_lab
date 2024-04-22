const Infrastructure = require("../models/Infrastructure");

const infrastructure = {
  create: async (req, res) => {
    try {
      const {
        designation,
        funcional,
        nao_funcional,
        total,
      } = req.body;

      const scchool_id = body.params.school_id;

      if (!designation) {
        return res.status(422).json({ message: "O nome da designação infraestrutura é obrigatorio!" });
      }

      if (!funcional) {
        return res.status(422).json({ message: "O campo funcional é obrigatório!" });
      }

      if (!nao_funcional) {
        return res.status(422).json({ message: "O campo não funcional é obrigatório!" });
      }

      const newInfrastructure = new Infrastructure({
        designation,
        nao_funcional,
        funcional,
        scchool_id,
        total
      });

   
      await newInfrastructure.save();

      res.status(201).json({
        message: "Infraestrutura registrada com sucesso",
        data: newInfrastructure,
      });
    } catch (error) {
      console.error("Erro ao registrar a infraestrutura:", error);
      res.status(500).json({ message: "Erro ao registrar a infraestrutura" });
    }
  },
  listAllSchools: async (req, res, next) => {
    try {
      // Consulta todos os pagamentos no banco de dados
      const schools = await School.find();

      // Retorna a lista de pagamentos
      res.status(200).json({ message: 'Lista das escolas obtida com sucesso.', data: schools });
  } catch (error) {
      // Se houver algum erro durante a consulta ao banco de dados
      res.status(500).json({ message: 'Erro ao obter a lista das escolas.', error });
  }
  },
};

module.exports = infrastructure;