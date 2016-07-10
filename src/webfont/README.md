# Grunt Icon Font Generator

## Illustrator Instructions:
Put each icon on a separate layer.
Name each layer with the svg filename for each icon.
This will also be used for the css class of the icon.Export each layer individually to the src/webfont/vectors folder as svg files. ### Batch Export:
In the src/webfont directory there is a MultiExporter.jsx script.
Copy this to your local Illustrator scripts folder.
- applications/adobe illustrator/presets/en_US/Scripts (Mac)
- C:\Program Files\Adobe\Adobe Illustrator CS5\Presets\Scripts (PC)Restart Illustrator and run the script - File > Scripts > MultiExporter
In the dialog set the output directory to src/webfont/vectors.
Set export format to svg.
~~Deselect trim edges.~~
Export.http://www.tbyrne.org/export-illustrator-layers-to-svg-files### Manually Export Individual Layers:
Temporarily delete every layer except the one to export.
File > Save a Copy to the src/webfont/vectors directory.
Rename the file using the layer name.
Set format to svg (set svg profile  to 1.0 in the next dialog).
Ok.
Restore the deleted layers and repeat steps with the next one to export.
Finally, run the grunt task to create the icon font.