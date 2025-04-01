export const creatMunicipio = async (req, res) => {
    try {
        const { codigo_ibge, nome, capital, codigo_uf, local} = req.body
        const db = req.app.locals.db
        const existeMunicipio = await db.collection('municipios').findOne({codigo_ibge}
        )
        if (exitesMunicipio){
            return res.status(409).json(({error: true, message:"ja existe um municipio"}))
        }
    }
}