
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class TargetGroupaaaaaaaaaaaaaa 
	{
		public TargetGroupaaaaaaaaaaaaaa() 
		{
		}

		public int Id  { get; set; }
		public string Name  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public TargetGroupaaaaaaaaaaaaaa ConvertFromModel(Group group)
		{
			Id = group.Id;
			Name = group.Name;

			return this;
		}

		public Group GetGroupFromViewModel()
		{
			var model = new Group();
			model.Id =  Id;
			model.Name =  Name;

			return model;
		}
			
	}
}