import { motion } from "framer-motion";

function LoadingSkeleton() {

    return (

        <div className="space-y-8 animate-pulse">

            <div className="h-10 w-64 rounded-xl bg-slate-200"></div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

                {[1,2,3,4].map((item)=>(

                    <motion.div

                        key={item}

                        className="rounded-3xl bg-slate-200 h-40"

                        animate={{
                            opacity:[0.5,1,0.5]
                        }}

                        transition={{
                            repeat:Infinity,
                            duration:1.5
                        }}

                    />

                ))}

            </div>

            <div className="grid lg:grid-cols-3 gap-6">

                <div className="bg-slate-200 rounded-3xl h-[400px] col-span-2"></div>

                <div className="bg-slate-200 rounded-3xl h-[400px]"></div>

            </div>

        </div>

    );

}

export default LoadingSkeleton;