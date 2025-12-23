'use client'
import { motion } from 'framer-motion'

export default function ScrollAnimation({ children, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
