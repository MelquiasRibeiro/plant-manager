import Sale from '../models/Sale';
import Plants from '../models/Plant';
import parseStringAsArry from '../../utils/parseStringToArray';

class SaleController {
    async index(req, res) {
        const sales = await Sale.findAll();

        return res.json(sales);
    }

    async store(req, res) {
        const soldPlants = [];
        const itemsArr = parseStringAsArry(req.body.items);
        let expected_price = 0;

        for (let i = 0; i < itemsArr.length; i++) {
            const infoPlant = await Plants.findByPk(itemsArr[i]);
            expected_price += parseInt(infoPlant.dataValues.price);
            soldPlants.push(infoPlant.dataValues);
        }

        const { payment_type, note, sele_price, items } = req.body;

        const discount = 100 - (sele_price * 100) / expected_price;

        const sale = await Sale.create({
            payment_type,
            note,
            sele_price,
            items,
            discount,
            expected_price,
        });

        return res.status(201).json({ itensSold: soldPlants, sale });
    }

    async update(req, res) {
        const sale = await Sale.findByPk(req.params.id);

        const saleUpdated = await sale.update(req.body);

        return res.send(saleUpdated);
    }

    async show(req, res) {
        const sale = await Sale.findByPk(req.params.id);
        return res.json(sale);
    }

    async delete(req, res) {
        const sale = await Sale.findByPk(req.params.id);
        await sale.destroy();
        return res.status(204).send();
    }
}

export default new SaleController();
