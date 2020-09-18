import Plant from '../models/Plant';
import Stock from '../models/Stock';

class PlantController {
    async index(req, res) {
        const plants = await Plant.findAll();

        const serializedPlants = plants.map((plant) => {
            return {
                ...plant.dataValues,
                image_url: `http://10.0.0.111:3333/files/${plant.image}`,
            };
        });

        return res.json({ serializedPlants });
    }

    async show(req, res) {
        const plant = await Plant.findByPk(req.params.id);
        const serializedPlant = {
            ...plant.dataValues,
            image_url: `http://10.0.0.111:3333/files/${plant.image}`,
        };

        return res.json({ serializedPlant });
    }

    async store(req, res) {
        const { name, description, price, amount } = req.body;

        const plantExist = await Plant.findOne({
            where: { name },
        });
        if (plantExist) {
            return res.status(400).json({
                error: 'Está planta já está cadastrada',
            });
        }
        const newPlant = {
            name,
            description,
            price,
            amount,
            image: req.file.filename,
        };

        const plant = await Plant.create(newPlant);

        await Stock.create({ plant_id: plant.id, amount: req.body.amount });

        return res.status(201).send(plant);
    }

    async update(req, res) {
        const plant = await Plant.findByPk(req.params.id);

        const plantUpdated = await plant.update(req.body);

        return res.send(plantUpdated);
    }

    async delete(req, res) {
        const plant = await Plant.findByPk(req.params.id);
        await plant.destroy();
        return res.status(204).send();
    }
}

export default new PlantController();
