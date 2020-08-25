import Plant from '../models/Plant';

class PlantController {
    async index(req, res) {
        const plants = await Plant.findAll();

        return res.json({ plants });
    }

    async show(req, res) {
        const plant = await Plant.findByPk(req.params.id);
        console.log(req.params.id);
        return res.json({ plant });
    }

    async store(req, res) {
        const plantExist = await Plant.findOne({
            where: { name: req.body.name },
        });
        if (plantExist) {
            return res.status(400).json({
                error: 'Está planta já está cadastrada',
            });
        }
        const plant = await Plant.create(req.body);
        return res.status(201).send(plant);
    }
}

export default new PlantController();
