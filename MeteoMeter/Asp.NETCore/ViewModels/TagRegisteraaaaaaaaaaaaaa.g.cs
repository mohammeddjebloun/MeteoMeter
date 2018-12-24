
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class TagRegisteraaaaaaaaaaaaaa 
	{
		public TagRegisteraaaaaaaaaaaaaa() 
		{
		}

		public string InstallationId  { get; set; }
		public string RegistrationId  { get; set; }
		public string Tags  { get; set; }
		public string Platform  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public TagRegisteraaaaaaaaaaaaaa ConvertFromModel()
		{

			return this;
		}

	
	}
}