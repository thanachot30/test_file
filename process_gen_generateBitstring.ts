  generateBitstring(issuedCredentials: Credential[]) {
    try {
      console.log(issuedCredentials);
      const len = 131072;
      const bitstring = new Array(len).fill(0); // 16KB of zeros 131072
      bitstring[len - 1] = len - 1;
      console.log('bitstring', bitstring);
      bitstring[5] = 3;
      console.log('bitstring', bitstring);
      const bitBuffer = Buffer.from(bitstring);
      console.log('bitBuffer', bitBuffer);
      const compressedBitstring = zlib.gzipSync(bitBuffer);
      console.log('compressedBitstring', compressedBitstring);
      const encodedBitstring = base64url.encode(compressedBitstring);
      console.log('encodedBitstring', encodedBitstring);
      ////..................................///////
      // const decode = base64url.toBuffer(encodedBitstring);
      // const uncompress = zlib.gunzipSync(Buffer.from(decode));
      // console.log('uncompress', uncompress);
      // console.log('acess BUfer', uncompress[5], uncompress[0], uncompress[20]);
      return encodedBitstring;
    } catch (error) {
      throw new Error(error);
    }
  }
