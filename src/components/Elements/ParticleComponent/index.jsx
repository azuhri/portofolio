import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticleComponent = () => {
    const options = useMemo(() => {
        return {
            particles: {
                move: {
                    enable: true,
                    speed: 1,
                },
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: 2,
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#f4a261",
                    opacity: 0.4,
                    width: 1,
                },
            },
        };
    }, []);

    const initParticles = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return <Particles init={initParticles} options={options} />;
};

export default ParticleComponent;
