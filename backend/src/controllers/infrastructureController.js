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

      const scchool_id = req.params.school_id;

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
  listInfrastructuresOfSchool: async (req, res, next) => {
    try {
        const schoolId = req.params.school_id;
        
        // Verifique se a escola existe
        const school = await School.findById(schoolId);
        if (!school) {
            return res.status(404).json({ message: 'Escola não encontrada.' });
        }

        // Consulte todas as infraestruturas associadas a essa escola
        const infrastructures = await Infrastructure.find({ school: schoolId });

        // Retorna a lista de infraestruturas
        res.status(200).json({ message: 'Lista de infraestruturas da escola obtida com sucesso.', data: infrastructures });
    } catch (error) {
        // Se houver algum erro durante a consulta ao banco de dados
        res.status(500).json({ message: 'Erro ao obter a lista de infraestruturas da escola.', error });
    }
}
};

module.exports = infrastructure;