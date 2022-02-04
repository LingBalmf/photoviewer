import logo from './logo.svg';
import { PhotoViewer} from './photoviewer/PhotoViewer';
import { imageUrls } from './photoviewer/imageUrls';


function App() {
    return (
        <div className="post-image"> 
            <h1>React Photo Viewer</h1>
            <PhotoViewer urls={imageUrls} />
        </div>
    );
}

export default App;