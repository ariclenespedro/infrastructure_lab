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
        message: "Escola registrada com sucesso",
        data: newSchool,
      });
    } catch (error) {
      console.error("Erro ao registrar a escola:", error);
      res.status(500).json({ message: "Erro ao registrar a escola" });
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

module.exports = school;