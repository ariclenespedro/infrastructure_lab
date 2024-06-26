const Infrastructure = require("../models/Infrastructure");
const School = require("../models/School");

const infrastructure = {
  create: async (req, res) => {
    try {
      const { designation, funcional, nao_funcional, total } = req.body;

      const school_id = req.params.school_id;

      const school = await School.findById(school_id);

      if (!school) {
        return res.status(404).json({ message: "Escola não encontrada" });
      }

      if (!designation) {
        return res
          .status(422)
          .json({
            message: "O nome da designação infraestrutura é obrigatorio!",
          });
      }

      if (!funcional) {
        return res
          .status(422)
          .json({ message: "O campo funcional é obrigatório!" });
      }

      if (!nao_funcional) {
        return res
          .status(422)
          .json({ message: "O campo não funcional é obrigatório!" });
      }

      const newInfrastructure = new Infrastructure({
        designation,
        nao_funcional,
        funcional,
        school: school,
        total,
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
        return res.status(404).json({ message: "Escola não encontrada." });
      }

      // Consulte todas as infraestruturas associadas a essa escola
      const infrastructures = await Infrastructure.find({ school: schoolId });

      // Retorna a lista de infraestruturas
      res
        .status(200)
        .json({
          message: "Lista de infraestruturas da escola obtida com sucesso.",
          data: infrastructures,
        });
    } catch (error) {
      // Se houver algum erro durante a consulta ao banco de dados
      res
        .status(500)
        .json({
          message: "Erro ao obter a lista de infraestruturas da escola.",
          error,
        });
    }
  },
    update: async (req, res) => {
    try {
        const {id, funcional, nao_funcional, total } = req.body;

        console.log(req.body);
 
        const infrastructure = await Infrastructure.findById(id);

        if(! infrastructure){
            return res.status(404).json({ message: "Infraestrutura não encontrada." });
        }

         await Infrastructure.updateOne({
            funcional, nao_funcional, total
        })

        res.status(200).json({message: "OK"});

        
    } catch (error) {
        res
        .status(500)
        .json({
          message: "Erro ao atualizar os dados da infraestruturas da escola.",
          error,
        });
    }
  },
};

module.exports = infrastructure;
