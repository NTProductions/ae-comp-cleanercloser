 do {
     app.executeCommand(app.findMenuCommandId("Close"));
     } while(app.project.activeItem != null && app.project.activeItem instanceof CompItem);
