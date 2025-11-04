
const Chapter3_HovertapEffect = ({ motion }) => {
    return (
        <motion.div className='box cursor-pointer'
            whileHover={{ backgroundColor: 'crimson' }}
            whileTap={{ scale: 0.8 }}
        >
            Hover & Tap
        </motion.div>
    )
}

export default Chapter3_HovertapEffect;