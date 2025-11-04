
const Chapter2_Keyframes = ({ motion }) => {
    return (
        <motion.div className='box' animate={{
            x: [0, 1000, 1000, 0, 0],
            y: [0, 0, 300, 300, 0],
            rotate: [0, 360, 0, 0, -360]
        }}
            transition={{
                duration: 3,
                delay: 1,
                ease: 'anticipate'
            }}
        >
            KeyFrames
        </motion.div>
    )
}

export default Chapter2_Keyframes;