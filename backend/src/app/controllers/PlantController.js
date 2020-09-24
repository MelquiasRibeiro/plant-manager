import Plant from '../models/Plant';
import Stock from '../models/Stock';

class PlantController {
    async index(req, res) {
        const plants = await Plant.findAll({
            include: [
                {
                    model: Stock,
                    attributes: ['amount'],
                },
            ],
        });

        const serializedPlants = plants.map((plant) => {
            return {
                ...plant.dataValues,
                image_url: `${process.env.APP_URL}/files/${plant.image}`,
            };
        });

        return res.json({ serializedPlants });
    }

    async show(req, res) {
        const plant = await Plant.findByPk(req.params.id, {
            include: [
                {
                    model: Stock,
                    attributes: ['amount'],
                },
            ],
        });
        if (plant) {
            return res.json({
                plant,
                image_url: `${process.env.APP_URL}/files/${plant.image}`,
            });
        }
        return res.status(404).json({ error: 'product not found' });
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

        if (req.body.amount) {
            const plantAmount = await Stock.findOne({
                where: { plant_id: req.params.id },
            });

            await plantAmount.update({
                amount: req.body.amount,
            });
        }
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
