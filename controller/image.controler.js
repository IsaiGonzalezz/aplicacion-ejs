const multer = requiere ('multer')
const path = requiere ('path')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../images'),
    filename: (req, file, cb) => {
        cb(null, '${Date.now()}-$(file.originalname)')
    }
})

const upload = multer({storage: storage})

exports.upload = upload.single('image')

exports.uploadFile = (req,res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        const tipo = req.file.mymety
        const nom_foto = req.file.originalname
    
        conn.query('INSERT INTO ' + req.params.tabla + 'set ?',
        [{tipo, nom_foto}],
        (err, rows) =>{
            console.log (
                err 
                ? 'Err INSERT INTO ' + req.params.tabla + ' ' + err
                : req.params.tabla + ': IMAGEN AGREGADA '   
            )
            res.json(
                err
                ? {err: 'Error al cargar'}
                : {msg: 'Imagen cargada' }
            )
        } )
    })
}


