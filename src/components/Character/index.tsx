import Scene from "./Scene";

type CharacterModelProps = {
  onError?: (error: unknown) => void;
};

const CharacterModel = ({ onError }: CharacterModelProps) => {
  return <Scene onError={onError} />;
};

export default CharacterModel;
