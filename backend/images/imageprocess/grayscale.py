import numpy as np
from PIL import Image

def grayscale(input_image: np.ndarray, in_place = True):
	if(in_place):
		grayscale_inplace(input_image)
		return input_image
	else:
		return grayscale_return(input_image)

def grayscale_inplace(input_image: np.ndarray):
    w= input_image.shape[0]
    h= input_image.shape[1]
    for i in range(w):
        for j in range(h):
            R = input_image[i, j][0]
            G = input_image[i, j][1]
            B = input_image[i, j][2]
            gray = R*0.299 + G*0.587 + B*0.114
            input_image[i, j][0] = int(gray)
            input_image[i, j][1] = int(gray)
            input_image[i, j][2] = int(gray)
    return input_image
    
def grayscale_return(input_image: np.ndarray):
    w= input_image.shape[0]
    h= input_image.shape[1]
    output_image = np.zeros(input_image.shape, dtype = np.uint8)
    for i in range(w):
        for j in range(h):
            output_image[i, j] = input_image[i, j]
            R = input_image[i, j][0]
            G = input_image[i, j][1]
            B = input_image[i, j][2]
            gray = R*0.299 + G*0.587 + B*0.114
            output_image[i, j][0] = int(gray)
            output_image[i, j][1] = int(gray)
            output_image[i, j][2] = int(gray)
    return output_image

# Unit test
if __name__ == "__main__":
    im = Image.open("./demo/cat.png")
    pixels = np.array(im)
    im2 = Image.fromarray(np.uint8(grayscale(pixels, False)))
    im2.show()