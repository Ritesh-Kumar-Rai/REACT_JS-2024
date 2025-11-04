
const Chapter1_Basics = ({ motion }) => {
    return (
        <motion.div className="box"
            initial={{ scale: 1 }}
            animate={{
                x: 1000,
                rotate: 360
            }}
            transition={{
                delay: 2,
                duration: 0.4
            }}>
        </motion.div>
    )
}

export default Chapter1_Basics;