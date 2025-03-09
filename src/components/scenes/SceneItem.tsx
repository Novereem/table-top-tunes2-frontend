import React from "react";
import "../../assets/styles/components/scenes/sceneItem.css"

interface SceneItemProps {
    scene: { id: string; name: string };
}

const SceneItem: React.FC<SceneItemProps> = ({ scene }) => {
    return (
        <div className="sceneContainer">
            <div className="sceneHoverEffect">
                <div className="sceneItem">
                    <h5 className="sceneTitle">{scene.name}</h5>
                    <div className="sceneMeta">
                        <small>1999-01-01 00:00AM</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SceneItem;