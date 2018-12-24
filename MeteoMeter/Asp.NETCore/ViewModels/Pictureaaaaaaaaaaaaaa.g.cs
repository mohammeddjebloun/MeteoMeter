
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Pictureaaaaaaaaaaaaaa 
	{
		public Pictureaaaaaaaaaaaaaa() 
		{
		}

		public string Picture  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Pictureaaaaaaaaaaaaaa ConvertFromModel(Picture picture)
		{
			Picture = picture.Picture;

			return this;
		}

		public Picture GetPictureFromViewModel()
		{
			var model = new Picture();
			model.Picture =  Picture;

			return model;
		}
			
	}
}