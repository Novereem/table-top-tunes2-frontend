import React, { useEffect, useState } from "react";
import SceneItem from "./SceneItem";
import { getScenes } from "../../services/sceneService.ts";
import "../../assets/styles/components/scenes/sceneList.css"

const SceneList: React.FC = () => {
    const [scenes, setScenes] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        async function fetchScenes() {
            const fetchedScenes = await getScenes();
            setScenes(fetchedScenes);
        }
        fetchScenes();
    }, []);

    return (
        <div className="sceneListContainer">
            {scenes.map((scene) => (
                <SceneItem key={scene.id} scene={scene} />
            ))}
            <div className="sceneCreateButton">
                <button className="commonButton">+</button>
            </div>
        </div>
    );
};

export default SceneList;
