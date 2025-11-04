import { useRef } from "react";


const style = {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
};

const Chapter4_DragAnimate = ({ motion }) => {

    const dragConstraintRef = useRef(null);

    return (
        <section style={style} ref={dragConstraintRef}>

            <motion.div className='box'
                drag
                // dragConstraints={{
                //     top: 0,
                //     left: 0,
                //     right: 0,
                //     bottom: 0,
                // }}
                dragConstraints={dragConstraintRef}
                whileHover={{ cursor: 'grab' }}
                whileDrag={{
                    cursor: 'grabbing',
                    scale: 1.2,
                    backgroundColor: 'crimson',
                }}
            >
                Drag/Drop
            </motion.div>
        </section>
    )
}

export default Chapter4_DragAnimate;