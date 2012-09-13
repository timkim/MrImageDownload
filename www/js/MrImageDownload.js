/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var MrImageDownload = {
    // references to the canvas element
    theCanvas: null,
    theCTX: null,
    
    // the main function that starts the whole process of downloading 
    // an image to the photo library
    //
    // ele: the img element that contains the image we want
    download: function(ele){
        if(!this.theCanvas || !this.theCTX){
            this.initCanvas();
        }
        this.imageToCanvas(ele);
        var theData = this.theCanvas.toDataURL();
        alert(theData);  
    },
    
    initCanvas: function(){
        this.theCanvas = document.createElement("canvas");
        document.body.appendChild(this.theCanvas);
        this.theCanvas.setAttribute("style","display:none");
        this.theCTX = this.theCanvas.getContext('2d'); 
    },
    
    // grab an image and put it into an invisble canvas
    imageToCanvas: function(img){
        if(this.theCanvas && this.theCTX && img){
            this.resetCanvas();
            this.theCanvas.width = img.width;
            this.theCanvas.height = img.height;
            this.theCTX.drawImage(img,0,0,this.theCanvas.width, this.theCanvas.height); 
        }
    },
    
    // reset canvas so we can reuse it for other images
    resetCanvas: function(){
        if(this.theCanvas && this.theCTX){
            // from: http://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing
            // Store the current transformation matrix
            this.theCTX.save();
            
            // Use the identity matrix while clearing the canvas
            this.theCTX.setTransform(1, 0, 0, 1, 0, 0);
            this.theCTX.clearRect(0, 0, this.theCanvas.width, this.theCanvas.height);
            
            // Restore the transform
            this.theCTX.restore(); 
        }        
    },
    
    // save to photo album or somewhere on disk
    saveToPhotoLib: function(){
    
    }
};
